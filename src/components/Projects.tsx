"use client"; // Mark this as a Client Component

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 定义项目的数据结构类型
interface Project {
  id: number;
  title: string;
  description: string;
  gifUrl: string; // 指向 public 文件夹下的 GIF 路径
  techStack: string[]; // 新增：技术栈标签
  projectUrl?: string; // 可选的项目链接
  githubUrl?: string; // 可选的 GitHub 链接
  showDemoButton?: boolean; // 新增：是否显示申请 Demo 按钮
}

// 更新后的项目数据 - 调整顺序，新增 YOLO 项目
const projectsData: Project[] = [
  {
    id: 4, // 新增项目 ID
    title: '智慧检测 YOLO 视觉项目 (创业项目)',
    description: '作为联合创始人，主导承接省级检测中心 AI 视觉项目。基于 YOLO 前沿算法，带领 20 人团队攻克复杂场景下的目标检测难题，交付高精度、高效率的智能检测解决方案，实现显著的商业价值。',
    gifUrl: '/gifs/yolo.gif', // 指向 yolo.gif
    techStack: ['计算机视觉', 'YOLOv8', 'Python', 'PyTorch/TensorFlow', '项目管理', '团队领导', '需求分析', '商业落地'],
    showDemoButton: true, // 显示 Demo 按钮
    // projectUrl: '...', 
    // githubUrl: '...' // 商业项目通常不公开源码
  },
  {
    id: 1,
    title: 'Think Graph',
    description: '深度融合大型语言模型（LLM）能力，构建动态知识图谱。实现自然语言输入到结构化知识网络的智能转换与可视化探索，重新定义信息关联与认知方式。',
    gifUrl: '/gifs/think-graph.gif',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cytoscape.js', 'OpenAI API', 'Supabase', 'AI Prompt Engineering'],
    projectUrl: 'https://www.think-graph.com', // 添加链接 (确保协议 https://)
    // githubUrl: '...'
  },
  {
    id: 2,
    title: '5min-Interview',
    description: '五分钟面试官，快速辅助面试App。利用先进的 AI 对话模型模拟真实面试场景，提供即时反馈与评估，助力用户高效提升面试技能。',
    gifUrl: '/gifs/5minhr.gif', 
    techStack: ['React Native (Expo)', 'Node.js', 'Express', 'AI Chatbot Integration', 'API Design', 'Prompt Engineering'],
    showDemoButton: true, // 显示 Demo 按钮
    // projectUrl: '...', 
    // githubUrl: '...'
  },
  // NoobAI 可以根据需要保留或移除，如果项目不多建议保留
  {
    id: 3,
    title: 'NoobAI',
    description: '2023年，用一个周末的开发出来的乐子chatbot。聚焦于快速将 AI 前沿概念转化为可交互原型，验证创新想法，展现了在 AI 驱动下的敏捷开发与实验能力。',
    gifUrl: '/gifs/noobai.fun.gif', 
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'AI API Integration'], 
    projectUrl: 'https://www.noobai.fun', // 添加链接 (确保协议 https://)
    // githubUrl: '...'
  },
];

// Add card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            我的项目实践
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-3xl mx-auto">
            以下是我主导构思并利用前沿 AI 技术和现代 Web 框架实现的代表性项目，展现了从概念到原型的高效转化能力。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="group flex flex-col transform transition-all duration-500 ease-out hover:scale-[1.03]"
              variants={cardVariants}
            >
              <div
                className="flex flex-col flex-grow overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-shadow duration-300 ease-in-out group-hover:shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.gifUrl}
                    alt={`${project.title} 项目演示`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-x-4 flex-wrap gap-y-2">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                      >
                        访问项目
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1.5">
                          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                      >
                        查看源码
                      </a>
                    )}
                    {project.showDemoButton && (
                      <a
                        href="#contact"
                        className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
                          <path d="M10 3.75a2 2 0 100 4 2 2 0 000-4z" />
                          <path fillRule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                          <path d="M5.006 13.174a1.75 1.75 0 012.903-.992l.09-.154a/s*.*/*M14.994 13.174a1.75 1.75 0 00-2.903-.992l-.09-.154a/s*.*/*M10 11.25a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z" />
                        </svg>
                        申请 Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 