"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

// Types
type TestMode = "traditional" | "ai"
type TemperamentType = "melancholic" | "phlegmatic" | "sanguine" | "choleric"

interface Question {
  id: number
  text: string
  options: {
    text: string
    temperament: TemperamentType
    value: number
  }[]
}

interface TestResult {
  melancholic: number
  phlegmatic: number
  sanguine: number
  choleric: number
  dominant: TemperamentType
  analysis: string
}

// Constants
const TEMPERAMENT_DESCRIPTIONS = {
  melancholic: {
    title: "Melankolis",
    description:
      "Analitis, perfeksionis, dan sensitif. Anda cenderung mendalam, reflektif, dan berorientasi pada detail. Anda menghargai kualitas dan kedalaman dalam hubungan dan pekerjaan.",
    traits: ["Perfeksionis", "Analitis", "Mendalam", "Sensitif", "Terorganisir"],
    color: "bg-blue-500",
  },
  phlegmatic: {
    title: "Flegmatis",
    description:
      "Tenang, damai, dan santai. Anda cenderung menjadi pendengar yang baik dan mediator konflik. Anda menghargai harmoni dan stabilitas dalam kehidupan.",
    traits: ["Tenang", "Konsisten", "Damai", "Adaptif", "Sabar"],
    color: "bg-green-500",
  },
  sanguine: {
    title: "Sanguinis",
    description:
      "Ekspresif, antusias, dan sosial. Anda cenderung energik, optimis, dan menikmati interaksi sosial. Anda menghidupkan suasana dan membawa kegembiraan.",
    traits: ["Ekspresif", "Antusias", "Sosial", "Spontan", "Optimis"],
    color: "bg-yellow-500",
  },
  choleric: {
    title: "Koleris",
    description:
      "Tegas, berorientasi pada tujuan, dan berenergi tinggi. Anda cenderung menjadi pemimpin alami yang fokus pada pencapaian dan hasil. Anda menghargai efisiensi dan produktivitas.",
    traits: ["Tegas", "Berorientasi tujuan", "Berenergi", "Mandiri", "Visioner"],
    color: "bg-red-500",
  },
}

// Traditional test questions
const TRADITIONAL_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Bagaimana Anda biasanya merespons perubahan mendadak?",
    options: [
      { text: "Menganalisis semua kemungkinan sebelum bertindak", temperament: "melancholic", value: 3 },
      { text: "Menerima dengan tenang dan beradaptasi perlahan", temperament: "phlegmatic", value: 3 },
      { text: "Menyambut dengan antusias dan langsung beradaptasi", temperament: "sanguine", value: 3 },
      { text: "Segera mencari cara untuk mengendalikan situasi", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 2,
    text: "Dalam sebuah diskusi kelompok, Anda cenderung:",
    options: [
      {
        text: "Mendengarkan dengan seksama dan berbicara hanya ketika memiliki pemikiran mendalam",
        temperament: "melancholic",
        value: 3,
      },
      { text: "Mendengarkan semua pendapat dan mencari jalan tengah", temperament: "phlegmatic", value: 3 },
      { text: "Berbagi banyak ide dan mendorong partisipasi semua orang", temperament: "sanguine", value: 3 },
      { text: "Memimpin diskusi dan mengarahkan ke solusi konkret", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 3,
    text: "Ketika menghadapi kegagalan, Anda biasanya:",
    options: [
      {
        text: "Menganalisis secara mendalam apa yang salah dan bagaimana memperbaikinya",
        temperament: "melancholic",
        value: 3,
      },
      { text: "Menerima dengan tenang dan melanjutkan hidup", temperament: "phlegmatic", value: 3 },
      { text: "Mencoba melihat sisi positifnya dan segera mencoba hal baru", temperament: "sanguine", value: 3 },
      { text: "Segera membuat rencana baru untuk mencapai tujuan", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 4,
    text: "Bagaimana Anda biasanya mengatur ruang kerja atau kamar Anda?",
    options: [
      { text: "Sangat terorganisir dengan sistem yang terperinci", temperament: "melancholic", value: 3 },
      { text: "Cukup rapi tapi tidak terlalu ketat dengan sistem", temperament: "phlegmatic", value: 3 },
      { text: "Berantakan tapi kreatif, dengan banyak hal menarik di sekitar", temperament: "sanguine", value: 3 },
      { text: "Fungsional dan efisien untuk produktivitas maksimal", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 5,
    text: "Dalam situasi konflik, Anda cenderung:",
    options: [
      { text: "Memikirkan semua sudut pandang dan mencari solusi ideal", temperament: "melancholic", value: 3 },
      { text: "Menjadi penengah dan mencari kompromi", temperament: "phlegmatic", value: 3 },
      { text: "Mencoba mencairkan suasana dengan humor", temperament: "sanguine", value: 3 },
      { text: "Menghadapi konflik secara langsung dan tegas", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 6,
    text: "Bagaimana Anda merencanakan liburan?",
    options: [
      { text: "Penelitian mendalam dan itinerary terperinci", temperament: "melancholic", value: 3 },
      { text: "Rencana fleksibel dengan waktu santai yang cukup", temperament: "phlegmatic", value: 3 },
      { text: "Fokus pada kegiatan sosial dan petualangan spontan", temperament: "sanguine", value: 3 },
      { text: "Jadwal efisien untuk memaksimalkan pengalaman", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 7,
    text: "Ketika bekerja dalam tim, Anda biasanya:",
    options: [
      {
        text: "Memastikan semua detail diperhatikan dan standar tinggi terpenuhi",
        temperament: "melancholic",
        value: 3,
      },
      { text: "Mendukung anggota tim dan menjaga harmoni kelompok", temperament: "phlegmatic", value: 3 },
      { text: "Membawa energi positif dan ide-ide kreatif", temperament: "sanguine", value: 3 },
      { text: "Mengambil inisiatif dan mendorong tim mencapai tujuan", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 8,
    text: "Bagaimana Anda biasanya menghabiskan waktu luang?",
    options: [
      {
        text: "Aktivitas mendalam seperti membaca atau hobi yang membutuhkan fokus",
        temperament: "melancholic",
        value: 3,
      },
      { text: "Bersantai dengan aktivitas yang menenangkan", temperament: "phlegmatic", value: 3 },
      { text: "Bertemu teman atau mencoba pengalaman baru yang menyenangkan", temperament: "sanguine", value: 3 },
      { text: "Aktivitas yang menantang atau mengembangkan keterampilan baru", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 9,
    text: "Ketika membuat keputusan penting, Anda cenderung:",
    options: [
      { text: "Menganalisis semua pro dan kontra secara mendalam", temperament: "melancholic", value: 3 },
      {
        text: "Mempertimbangkan dengan tenang dan mencari solusi yang paling harmonis",
        temperament: "phlegmatic",
        value: 3,
      },
      { text: "Mengandalkan intuisi dan apa yang terasa benar", temperament: "sanguine", value: 3 },
      { text: "Membuat keputusan cepat berdasarkan logika dan efisiensi", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 10,
    text: "Bagaimana Anda merespons kritik?",
    options: [
      { text: "Menganalisis secara mendalam dan berusaha memperbaiki diri", temperament: "melancholic", value: 3 },
      { text: "Menerima dengan tenang dan mempertimbangkannya", temperament: "phlegmatic", value: 3 },
      { text: "Mencoba tidak terlalu memikirkannya dan tetap positif", temperament: "sanguine", value: 3 },
      { text: "Mengevaluasi apakah kritik tersebut valid dan berguna", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 11,
    text: "Dalam situasi sosial baru, Anda biasanya:",
    options: [
      { text: "Mengamati dari pinggir sebelum terlibat", temperament: "melancholic", value: 3 },
      { text: "Berinteraksi dengan tenang dan ramah", temperament: "phlegmatic", value: 3 },
      { text: "Langsung bergaul dan memulai percakapan", temperament: "sanguine", value: 3 },
      { text: "Mencari koneksi yang bermakna dan bermanfaat", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 12,
    text: "Ketika di bawah tekanan, Anda cenderung:",
    options: [
      { text: "Menjadi cemas dan terlalu analitis", temperament: "melancholic", value: 3 },
      { text: "Menarik diri dan mencari ketenangan", temperament: "phlegmatic", value: 3 },
      { text: "Mencari dukungan sosial dan berbicara tentang perasaan Anda", temperament: "sanguine", value: 3 },
      { text: "Fokus pada solusi dan bekerja lebih keras", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 13,
    text: "Bagaimana pendekatan Anda terhadap aturan dan prosedur?",
    options: [
      {
        text: "Mengikuti dengan hati-hati dan memastikan semua dilakukan dengan benar",
        temperament: "melancholic",
        value: 3,
      },
      { text: "Mengikuti dengan tenang tanpa banyak pertanyaan", temperament: "phlegmatic", value: 3 },
      {
        text: "Fleksibel dan kadang mencari cara kreatif untuk menginterpretasikannya",
        temperament: "sanguine",
        value: 3,
      },
      { text: "Mengikuti jika masuk akal, menantang jika tidak efisien", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 14,
    text: "Ketika berbicara dengan orang lain, Anda cenderung:",
    options: [
      { text: "Berhati-hati dengan kata-kata dan mendalam", temperament: "melancholic", value: 3 },
      { text: "Tenang, mendengarkan lebih banyak daripada berbicara", temperament: "phlegmatic", value: 3 },
      { text: "Ekspresif, animasi, dan penuh cerita", temperament: "sanguine", value: 3 },
      { text: "Langsung ke pokok pembicaraan dan berorientasi solusi", temperament: "choleric", value: 3 },
    ],
  },
  {
    id: 15,
    text: "Bagaimana Anda melihat masa depan?",
    options: [
      { text: "Dengan perencanaan hati-hati dan antisipasi kemungkinan masalah", temperament: "melancholic", value: 3 },
      { text: "Dengan penerimaan tenang terhadap apapun yang terjadi", temperament: "phlegmatic", value: 3 },
      { text: "Dengan optimisme dan kegembiraan untuk petualangan baru", temperament: "sanguine", value: 3 },
      { text: "Dengan visi jelas tentang tujuan dan rencana untuk mencapainya", temperament: "choleric", value: 3 },
    ],
  },
]

// AI test questions
const AI_QUESTIONS = [
  "Ceritakan tentang bagaimana Anda biasanya menghabiskan akhir pekan ideal?",
  "Bagaimana reaksi Anda ketika rencana mendadak berubah?",
  "Bagaimana cara Anda menangani konflik dengan teman atau keluarga?",
  "Apa yang membuat Anda merasa paling bersemangat dalam hidup?",
  "Bagaimana Anda biasanya membuat keputusan penting?",
  "Ceritakan tentang proyek atau pencapaian yang membuat Anda bangga.",
  "Bagaimana Anda merespons kritik dari orang lain?",
  "Apa yang Anda lakukan ketika merasa stres atau tertekan?",
  "Bagaimana Anda memandang perubahan dalam hidup?",
  "Ceritakan tentang cara Anda berinteraksi dalam kelompok sosial baru.",
  "Apa yang lebih Anda sukai: rutinitas yang terstruktur atau fleksibilitas?",
  "Bagaimana Anda mengelola waktu dan prioritas Anda?",
  "Apa yang membuat Anda merasa paling terhubung dengan orang lain?",
  "Bagaimana Anda bereaksi terhadap tantangan atau hambatan?",
  "Jika Anda bisa mengubah satu hal tentang diri Anda, apa itu dan mengapa?",
]

// API Configuration
const API_CONFIG = {
  endpoint: "https://api.groq.com/openai/v1/chat/completions",
  apiKey: "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", // Ganti dengan API key Anda
  model: "llama-3.3-70b-versatile",
  temperature: 0.7, // Nilai 0-1: Semakin rendah semakin konsisten, semakin tinggi semakin kreatif
  maxTokens: 1000, // Maksimum token yang dihasilkan
  topP: 0.9, // Nilai 0-1: Mengontrol keberagaman output
}

export default function PersonalityTest() {
  // State
  const [testMode, setTestMode] = useState<TestMode>("traditional")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [traditionalAnswers, setTraditionalAnswers] = useState<number[]>([])
  const [aiAnswers, setAiAnswers] = useState<string[]>([])
  const [testResult, setTestResult] = useState<TestResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isTestComplete, setIsTestComplete] = useState(false)
  const [aiMessages, setAiMessages] = useState<{ role: "user" | "assistant" | "system"; content: string }[]>([])
  const [currentAiInput, setCurrentAiInput] = useState("")
  const [isAiThinking, setIsAiThinking] = useState(false)

  const chatEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [aiMessages])

  // Handle traditional test answer selection
  const handleTraditionalAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...traditionalAnswers]
    newAnswers[questionIndex] = optionIndex
    setTraditionalAnswers(newAnswers)

    // Move to next question or complete test
    if (questionIndex === TRADITIONAL_QUESTIONS.length - 1) {
      calculateTraditionalResult(newAnswers)
    } else {
      setCurrentQuestionIndex(questionIndex + 1)
    }
  }

  // Calculate traditional test results
  const calculateTraditionalResult = (answers: number[]) => {
    const scores = {
      melancholic: 0,
      phlegmatic: 0,
      sanguine: 0,
      choleric: 0,
    }

    answers.forEach((answerIndex, questionIndex) => {
      const selectedOption = TRADITIONAL_QUESTIONS[questionIndex].options[answerIndex]
      scores[selectedOption.temperament] += selectedOption.value
    })

    // Determine dominant temperament
    let dominant: TemperamentType = "melancholic"
    let maxScore = scores.melancholic

    Object.entries(scores).forEach(([temperament, score]) => {
      if (score > maxScore) {
        dominant = temperament as TemperamentType
        maxScore = score
      }
    })

    // Create analysis
    const analysis = `Berdasarkan jawaban Anda, temperamen dominan Anda adalah ${TEMPERAMENT_DESCRIPTIONS[dominant].title}. ${TEMPERAMENT_DESCRIPTIONS[dominant].description}`

    setTestResult({
      ...scores,
      dominant,
      analysis,
    })

    setIsTestComplete(true)
  }

  // Handle AI test answer submission
  const handleAiAnswer = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentAiInput.trim()) return

    const userAnswer = currentAiInput
    setCurrentAiInput("")

    // Add user message to chat
    const updatedMessages = [...aiMessages, { role: "user", content: userAnswer }]
    setAiMessages(updatedMessages)

    // Save answer
    const newAiAnswers = [...aiAnswers]
    newAiAnswers[currentQuestionIndex] = userAnswer
    setAiAnswers(newAiAnswers)

    // Move to next question or complete test
    if (currentQuestionIndex === AI_QUESTIONS.length - 1) {
      // All questions answered, analyze results
      await analyzeAiResults(newAiAnswers)
    } else {
      // Show next question
      setIsAiThinking(true)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setAiMessages([...updatedMessages, { role: "assistant", content: AI_QUESTIONS[currentQuestionIndex + 1] }])
        setIsAiThinking(false)
      }, 1000)
    }
  }

  // Analyze AI test results
  const analyzeAiResults = async (answers: string[]) => {
    setIsLoading(true)

    try {
      // Prepare the prompt with all user answers
      const prompt = `Berikut adalah jawaban user untuk pertanyaan psikologis: 
${answers
  .map(
    (answer, index) => `Pertanyaan ${index + 1}: ${AI_QUESTIONS[index]}
Jawaban: ${answer}`,
  )
  .join("\n\n")}

Berdasarkan teori 4 temperamen (Melankolis, Flegmatis, Sanguinis, Koleris), analisis dan tentukan tipe kepribadian dominan user dan berikan penjelasan mendalam. Berikan juga persentase untuk masing-masing temperamen (total 100%).`

      // Make API request to Groq
      const response = await fetch(API_CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
          model: API_CONFIG.model,
          messages: [{ role: "user", content: prompt }],
          temperature: API_CONFIG.temperature,
          max_tokens: API_CONFIG.maxTokens,
          top_p: API_CONFIG.topP,
        }),
      })

      const data = await response.json()
      const analysis = data.choices[0].message.content

      // Extract percentages from analysis (this is a simple regex approach)
      const melancholicMatch = analysis.match(/melankolis[^\d]*(\d+)%/i)
      const phlegmaticMatch = analysis.match(/flegmatis[^\d]*(\d+)%/i)
      const sanguineMatch = analysis.match(/sanguinis[^\d]*(\d+)%/i)
      const cholericMatch = analysis.match(/koleris[^\d]*(\d+)%/i)

      const scores = {
        melancholic: melancholicMatch ? Number.parseInt(melancholicMatch[1]) : 25,
        phlegmatic: phlegmaticMatch ? Number.parseInt(phlegmaticMatch[1]) : 25,
        sanguine: sanguineMatch ? Number.parseInt(sanguineMatch[1]) : 25,
        choleric: cholericMatch ? Number.parseInt(cholericMatch[1]) : 25,
      }

      // Determine dominant temperament
      let dominant: TemperamentType = "melancholic"
      let maxScore = scores.melancholic

      Object.entries(scores).forEach(([temperament, score]) => {
        if (score > maxScore) {
          dominant = temperament as TemperamentType
          maxScore = score
        }
      })

      // Set result
      setTestResult({
        ...scores,
        dominant,
        analysis,
      })

      // Add AI analysis to chat
      setAiMessages([...aiMessages, { role: "assistant", content: analysis }])

      setIsTestComplete(true)
    } catch (error) {
      console.error("Error analyzing results:", error)
      setAiMessages([
        ...aiMessages,
        { role: "assistant", content: "Maaf, terjadi kesalahan saat menganalisis hasil. Silakan coba lagi." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Reset test
  const resetTest = () => {
    setTestMode("traditional")
    setCurrentQuestionIndex(0)
    setTraditionalAnswers([])
    setAiAnswers([])
    setTestResult(null)
    setIsTestComplete(false)
    setAiMessages([])
    setCurrentAiInput("")
  }

  // Start AI test
  const startAiTest = () => {
    setAiMessages([{ role: "assistant", content: AI_QUESTIONS[0] }])
  }

  // Initialize AI test when switching to AI mode
  useEffect(() => {
    if (testMode === "ai" && aiMessages.length === 0) {
      startAiTest()
    }
  }, [testMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-amber-950/80 to-stone-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-stone-950/95"></div>

      <div className="relative z-10 max-w-3xl mx-auto bg-stone-950/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-amber-900/30">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-amber-950/70 to-stone-950/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-stone-950/95"></div>

          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>

          <div className="relative z-10 px-6 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-100 drop-shadow-2xl leading-none tracking-tight font-serif">
              Tes Kepribadian 4 Temperamen
            </h1>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-24"></div>
              <div className="mx-4 w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-24"></div>
            </div>
            <p className="text-amber-200 text-center mt-3 font-light tracking-wide">
              Kenali diri Anda lebih dalam melalui teori temperamen klasik
            </p>
          </div>
        </div>

        {/* Test Mode Selector */}
        {!isTestComplete && (
          <div className="p-6 border-b border-amber-900/30">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setTestMode("traditional")}
                className={`px-6 py-3 rounded-lg font-medium font-serif transition-all duration-300 ${
                  testMode === "traditional"
                    ? "bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 shadow-lg shadow-amber-900/50"
                    : "bg-stone-800/50 text-amber-200 hover:bg-stone-700/50 border border-amber-900/30"
                }`}
              >
                Tes Tradisional
              </button>
              <button
                onClick={() => setTestMode("ai")}
                className={`px-6 py-3 rounded-lg font-medium font-serif transition-all duration-300 ${
                  testMode === "ai"
                    ? "bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 shadow-lg shadow-amber-900/50"
                    : "bg-stone-800/50 text-amber-200 hover:bg-stone-700/50 border border-amber-900/30"
                }`}
              >
                Tes dengan AI
              </button>
            </div>
            <div className="mt-4 text-sm text-amber-300/80 text-center font-light">
              {testMode === "traditional" ? (
                <p>Jawab 15 pertanyaan dengan pilihan yang paling sesuai dengan diri Anda</p>
              ) : (
                <p>Berinteraksi dengan AI yang akan menganalisis kepribadian Anda melalui percakapan</p>
              )}
            </div>
          </div>
        )}

        {/* Test Content */}
        <div className="p-6">
          {!isTestComplete ? (
            <>
              {/* Traditional Test */}
              {testMode === "traditional" && (
                <div className="space-y-6">
                  <div className="flex justify-between text-sm text-amber-300/70 mb-2">
                    <span>
                      Pertanyaan {currentQuestionIndex + 1} dari {TRADITIONAL_QUESTIONS.length}
                    </span>
                    <span>{Math.round((currentQuestionIndex / TRADITIONAL_QUESTIONS.length) * 100)}% selesai</span>
                  </div>

                  <div className="w-full bg-stone-800/50 rounded-full h-3 border border-amber-900/30">
                    <div
                      className="bg-gradient-to-r from-amber-600 to-amber-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-amber-900/50"
                      style={{ width: `${(currentQuestionIndex / TRADITIONAL_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-medium text-amber-100 leading-relaxed font-serif">
                    {TRADITIONAL_QUESTIONS[currentQuestionIndex].text}
                  </h2>

                  <div className="space-y-3">
                    {TRADITIONAL_QUESTIONS[currentQuestionIndex].options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleTraditionalAnswer(currentQuestionIndex, optionIndex)}
                        className="w-full text-left p-4 border border-amber-900/30 rounded-lg bg-stone-900/30 hover:bg-amber-950/30 hover:border-amber-600/50 transition-all duration-300 font-serif text-amber-200 hover:text-amber-100 backdrop-blur-sm"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Test */}
              {testMode === "ai" && (
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-amber-300/70 mb-2">
                    <span>
                      Pertanyaan {currentQuestionIndex + 1} dari {AI_QUESTIONS.length}
                    </span>
                    <span>{Math.round((currentQuestionIndex / AI_QUESTIONS.length) * 100)}% selesai</span>
                  </div>

                  <div className="w-full bg-stone-800/50 rounded-full h-3 border border-amber-900/30">
                    <div
                      className="bg-gradient-to-r from-amber-600 to-amber-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-amber-900/50"
                      style={{ width: `${(currentQuestionIndex / AI_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>

                  <div className="bg-stone-900/50 backdrop-blur-sm rounded-lg p-4 h-96 overflow-y-auto border border-amber-900/30">
                    {aiMessages.map((message, index) => (
                      <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                        <div
                          className={`inline-block max-w-[80%] p-3 rounded-lg font-serif ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 rounded-br-none shadow-lg shadow-amber-900/50"
                              : "bg-stone-800/70 text-amber-200 rounded-bl-none border border-amber-900/30"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}

                    {isAiThinking && (
                      <div className="text-left mb-4">
                        <div className="inline-block bg-stone-800/70 text-amber-200 p-3 rounded-lg rounded-bl-none border border-amber-900/30">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  <form onSubmit={handleAiAnswer} className="flex space-x-2">
                    <input
                      type="text"
                      value={currentAiInput}
                      onChange={(e) => setCurrentAiInput(e.target.value)}
                      placeholder="Ketik jawaban Anda..."
                      className="flex-1 p-3 border border-amber-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-serif bg-stone-900/50 text-amber-100 placeholder-amber-300/50 backdrop-blur-sm"
                      disabled={isAiThinking || isLoading}
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 px-6 py-3 rounded-lg hover:from-amber-700 hover:to-amber-600 disabled:from-amber-900 disabled:to-amber-800 disabled:opacity-50 font-serif transition-all duration-300 shadow-lg shadow-amber-900/50"
                      disabled={!currentAiInput.trim() || isAiThinking || isLoading}
                    >
                      Kirim
                    </button>
                  </form>
                </div>
              )}
            </>
          ) : (
            /* Test Results */
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-amber-100 font-serif">Hasil Tes Kepribadian Anda</h2>
                <div className="mt-4 flex items-center justify-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-32"></div>
                  <div className="mx-4 w-2 h-2 bg-amber-400 rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-32"></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-950/50 to-stone-950/50 border border-amber-800/30 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-medium text-amber-200 mb-3 font-serif">
                  Temperamen Dominan: {TEMPERAMENT_DESCRIPTIONS[testResult!.dominant].title}
                </h3>
                <p className="text-amber-300/90 mb-6 leading-relaxed">
                  {TEMPERAMENT_DESCRIPTIONS[testResult!.dominant].description}
                </p>

                <div className="space-y-4 mt-6">
                  <h4 className="font-medium text-amber-200 text-lg">Distribusi Temperamen:</h4>

                  {/* Melancholic */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-amber-300">Melankolis</span>
                      <span className="text-sm font-medium text-amber-300">
                        {testMode === "traditional"
                          ? Math.round((testResult!.melancholic / 45) * 100)
                          : testResult!.melancholic}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-stone-800/50 rounded-full h-3 border border-amber-900/30">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-500 h-3 rounded-full shadow-lg"
                        style={{
                          width: `${
                            testMode === "traditional" ? (testResult!.melancholic / 45) * 100 : testResult!.melancholic
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {TEMPERAMENT_DESCRIPTIONS.melancholic.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded border border-blue-800/30"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Phlegmatic */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-amber-300">Flegmatis</span>
                      <span className="text-sm font-medium text-amber-300">
                        {testMode === "traditional"
                          ? Math.round((testResult!.phlegmatic / 45) * 100)
                          : testResult!.phlegmatic}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-stone-800/50 rounded-full h-3 border border-amber-900/30">
                      <div
                        className="bg-gradient-to-r from-green-600 to-green-500 h-3 rounded-full shadow-lg"
                        style={{
                          width: `${
                            testMode === "traditional" ? (testResult!.phlegmatic / 45) * 100 : testResult!.phlegmatic
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {TEMPERAMENT_DESCRIPTIONS.phlegmatic.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="text-xs bg-green-900/50 text-green-200 px-2 py-1 rounded border border-green-800/30"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sanguine */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-amber-300">Sanguinis</span>
                      <span className="text-sm font-medium text-amber-300">
                        {testMode === "traditional"
                          ? Math.round((testResult!.sanguine / 45) * 100)
                          : testResult!.sanguine}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-stone-800/50 rounded-full h-3 border border-amber-900/30">
                      <div
                        className="bg-gradient-to-r from-yellow-600 to-yellow-500 h-3 rounded-full shadow-lg"
                        style={{
                          width: `${
                            testMode === "traditional" ? (testResult!.sanguine / 45) * 100 : testResult!.sanguine
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {TEMPERAMENT_DESCRIPTIONS.sanguine.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="text-xs bg-yellow-900/50 text-yellow-200 px-2 py-1 rounded border border-yellow-800/30"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Choleric */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-amber-300">Koleris</span>
                      <span className="text-sm font-medium text-amber-300">
                        {testMode === "traditional"
                          ? Math.round((testResult!.choleric / 45) * 100)
                          : testResult!.choleric}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-stone-800/50 rounded-full h-3 border border-amber-900/30">
                      <div
                        className="bg-gradient-to-r from-red-600 to-red-500 h-3 rounded-full shadow-lg"
                        style={{
                          width: `${
                            testMode === "traditional" ? (testResult!.choleric / 45) * 100 : testResult!.choleric
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {TEMPERAMENT_DESCRIPTIONS.choleric.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="text-xs bg-red-900/50 text-red-200 px-2 py-1 rounded border border-red-800/30"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {testMode === "ai" && (
                <div className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-amber-200 mb-3 font-serif">Analisis Mendalam:</h3>
                  <div className="text-amber-300/90 whitespace-pre-line leading-relaxed">{testResult!.analysis}</div>
                </div>
              )}

              <div className="flex justify-center pt-4">
                <button
                  onClick={resetTest}
                  className="bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 px-8 py-3 rounded-lg hover:from-amber-700 hover:to-amber-600 font-serif transition-all duration-300 shadow-lg shadow-amber-900/50"
                >
                  Mulai Tes Baru
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-950/70 px-6 py-4 text-center text-sm text-amber-300/60 font-serif border-t border-amber-900/30">
          <p>Tes kepribadian 4 temperamen klasik: Melankolis, Flegmatis, Sanguinis, dan Koleris</p>
          <div className="mt-2 flex justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
