"use client"; // Mark this as a Client Component

// import Image from "next/image"; // Remove unused import
import Projects from '@/components/Projects';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation variants for sections (fade in from bottom)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// Animation variants for Hero text stagger
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animating in
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  const [showSpeechGif, setShowSpeechGif] = useState(false);
  const [isSpeechGifLoading, setIsSpeechGifLoading] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-16 lg:p-24 bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-12 sm:mb-16">
        {/* Placeholder for potential top bar elements like logo or nav */}
      </div>

      {/* Hero Section - 全局居中 */}
      <motion.div 
        className="relative flex flex-col place-items-center mb-16 sm:mb-24 text-center w-full max-w-5xl before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2"
          variants={heroItemVariants}
        >
          甘润泽
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-indigo-700 font-semibold mb-6"
          variants={heroItemVariants}
        >
          AI 应用探索者 / AI 产品构建者 / 创业经历
        </motion.p>
        <motion.p 
          className="max-w-3xl text-gray-700 mb-6 text-base sm:text-lg leading-relaxed"
          variants={heroItemVariants}
        >
          99年，本科毕业于北京理工大学 (985)，硕士毕业于新加坡国立大学 (NUS)。对利用前沿 AI 技术构建创新应用充满热情，擅长快速将想法转化为原型，并具备从零到一的创业项目经验与团队领导力。
        </motion.p>
        <motion.p 
          className="max-w-3xl text-base text-indigo-700 font-semibold mt-2"
          variants={heroItemVariants}
        >
          曾担任科技创业公司CTO，主导省级单位的视觉项目交付，并在行业会议发表演讲。
        </motion.p>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Projects />
      </motion.div>

      {/* 新增：行业贡献与视野 Section */}
      <motion.section 
        id="contributions" 
        className="py-16 sm:py-20 lg:py-24 w-full max-w-5xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            行业贡献与视野
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-3xl mx-auto">
            积极分享洞察，以前瞻性视角探索 AI 的未来发展与应用。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* 卡片 1: 付费文章 */}
          <div className="group overflow-hidden rounded-xl p-6 bg-white shadow-lg ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4"><span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">市场认可</span></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">商业约稿：AI Agent 深度分析</h3>
            <p className="text-sm text-gray-600 mb-4">撰写的关于 AI Agent 应用的文章获得商业约稿（稿酬 1000 元），展现了在AI Agent 行业的认可度，专业分析与写作能力。</p>
            <a href="https://mp.weixin.qq.com/s/-ePFe6-HpKem3WOMIyy8FQ?poc_token=HFYD9WejSrWyZI8aOq3ZUzQCsGItRyHLdI33S0av" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">阅读原文 &rarr;</a>
          </div>

          {/* 卡片 2: AI Agent 预言 */}
          <div className="group overflow-hidden rounded-xl p-6 bg-white shadow-lg ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-xl">
             <div className="mb-4"><span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">前瞻视野</span></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">洞察先机：预见 Agent 发展</h3>
            <p className="text-sm text-gray-600 mb-4">早在 2023 年即撰文分析 AI Agent 的发展潜力与挑战，体现对行业前沿趋势的敏锐洞察力。</p>
             {/* 替换回实际链接 */}
            <a href="https://mp.weixin.qq.com/s/qfet8EiZb-4LvLNAfTovXw" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">阅读原文 &rarr;</a>
          </div>

          {/* 卡片 3: 大会演讲 - 添加加载状态 */}
          <div className="group overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-xl flex flex-col">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4"><span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">行业发声</span></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">特邀演讲：AI 应用实践分享</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                受邀在人工智能大会（长沙站）作为演讲嘉宾，分享 AI 技术在具体场景的应用落地经验与思考。
              </p>
              
              <div className="mt-auto">
                {!showSpeechGif ? (
                  <button
                    onClick={() => {
                      setShowSpeechGif(true);
                      setIsSpeechGifLoading(true);
                    }}
                    className="inline-flex items-center justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5">
                      <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
                    </svg>
                    点击观看片段
                  </button>
                ) : (
                  <div className="mt-4 space-y-3">
                    {isSpeechGifLoading && (
                      <div className="text-sm text-gray-500 flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        加载中...
                      </div>
                    )}
                    <div className={`${isSpeechGifLoading ? 'opacity-50' : ''} rounded overflow-hidden transition-opacity duration-300 bg-black`}>
                      <video
                        src="/resources/meet.mp4"
                        title="会议演讲片段"
                        width={500} 
                        height={281}
                        className="w-full h-auto object-cover"
                        controls
                        autoPlay
                        onCanPlay={() => setIsSpeechGifLoading(false)}
                        onError={() => setIsSpeechGifLoading(false)}
                      />
                    </div>
                    {!isSpeechGifLoading && (
                      <button
                        onClick={() => setShowSpeechGif(false)}
                        className="inline-flex items-center justify-center rounded-md bg-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                          <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                        </svg>
                        收起
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 更新：技能专长 Section */}
      <motion.div 
        className="mb-32 w-full max-w-5xl text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-8">核心能力</h2>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 text-gray-800">
          <span className="bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-indigo-200 hover:border-indigo-300 transition-colors duration-200 cursor-default">AI 应用与产品构建</span>
          <span className="bg-sky-100 text-sky-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-sky-200 hover:border-sky-300 transition-colors duration-200 cursor-default">Prompt Engineering</span>
          <span className="bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-emerald-200 hover:border-emerald-300 transition-colors duration-200 cursor-default">计算机视觉 (YOLO)</span>
          <span className="bg-rose-100 text-rose-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-rose-200 hover:border-rose-300 transition-colors duration-200 cursor-default">项目管理与团队领导</span>
          <span className="bg-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-amber-200 hover:border-amber-300 transition-colors duration-200 cursor-default">快速原型开发</span>
          <span className="bg-violet-100 text-violet-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-violet-200 hover:border-violet-300 transition-colors duration-200 cursor-default">AI 行业分析与趋势预测</span>
          <span className="bg-teal-100 text-teal-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-teal-200 hover:border-teal-300 transition-colors duration-200 cursor-default">跨领域知识整合</span>
          <span className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-gray-300 hover:border-gray-400 transition-colors duration-200 cursor-default">React/Next.js</span>
          <span className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 text-sm font-medium border border-transparent hover:bg-gray-300 hover:border-gray-400 transition-colors duration-200 cursor-default">Node.js</span>
        </div>
      </motion.div>

        {/* Contact Section - 添加 id="contact" */}
        <motion.div 
          id="contact" 
          className="w-full max-w-5xl text-center mt-16 scroll-mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">联系我</h2>
          <p className="text-gray-600">
            邮箱: <a href="mailto:3567271318@qq.com" className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200">3567271318@qq.com</a>
          </p>
          {/* Add LinkedIn/GitHub links if desired */}
        </motion.div>

    </main>
  );
}
