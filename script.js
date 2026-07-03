const sampleJobs = [
  {
    title: "AI 应用工程师实习生",
    department: "AI 平台部",
    location: "上海 / 远程",
    description: "参与大模型应用、RAG 检索增强、Prompt 工程和 AI 工作流建设。",
    required: ["python", "rag", "llm", "大模型", "fastapi", "向量数据库", "prompt"],
    bonus: ["langchain", "agent", "检索", "部署", "react"]
  },
  {
    title: "后端开发实习生",
    department: "基础架构部",
    location: "上海",
    description: "负责业务接口、数据服务、系统稳定性和内部工具开发。",
    required: ["python", "java", "go", "后端", "api", "数据库", "sql", "fastapi"],
    bonus: ["redis", "docker", "微服务", "性能优化"]
  },
  {
    title: "数据分析实习生",
    department: "增长分析部",
    location: "北京 / 上海",
    description: "支持业务指标分析、用户增长实验、数据看板和策略复盘。",
    required: ["sql", "python", "数据分析", "可视化", "指标", "实验"],
    bonus: ["tableau", "powerbi", "ab test", "增长", "统计"]
  },
  {
    title: "前端工程师实习生",
    department: "产品技术部",
    location: "杭州 / 远程",
    description: "参与 Web 产品、数据后台、组件库和交互体验建设。",
    required: ["react", "typescript", "javascript", "前端", "web", "css"],
    bonus: ["next.js", "可视化", "设计系统", "工程化"]
  },
  {
    title: "产品经理实习生",
    department: "创新业务部",
    location: "北京",
    description: "负责需求调研、产品方案、竞品分析、数据复盘和跨团队推进。",
    required: ["产品", "需求", "用户研究", "原型", "数据", "沟通"],
    bonus: ["ai", "b 端", "figma", "增长", "项目管理"]
  },
  {
    title: "算法工程师实习生",
    department: "推荐算法部",
    location: "上海",
    description: "参与推荐、搜索、NLP、模型训练和离线实验分析。",
    required: ["机器学习", "深度学习", "推荐", "搜索", "nlp", "pytorch", "算法"],
    bonus: ["论文", "竞赛", "特征工程", "召回", "排序"]
  }
];

const samples = [
  {
    research: "RAG、大模型智能体、向量检索",
    profile:
      "王同学，计算机专业，做过基于 RAG 的校园问答助手，熟悉 Python、FastAPI、向量数据库、Prompt 调优，也有 React 前端项目经验。希望找 AI 应用或后端开发方向的实习，上海或远程优先。"
  },
  {
    research: "数据分析、用户增长、A/B Test",
    profile:
      "陈同学，统计学专业，熟悉 SQL、Python、Tableau，做过用户留存分析和 A/B Test 项目，希望从事数据分析、增长分析相关岗位，北京或上海均可。"
  },
  {
    research: "前端工程化、React、低代码平台",
    profile:
      "刘同学，软件工程专业，熟悉 React、TypeScript、CSS 和可视化组件，做过后台管理系统与低代码页面编辑器，偏好前端工程师实习。"
  },
  {
    research: "推荐系统、NLP、召回排序",
    profile:
      "赵同学，人工智能专业，做过推荐系统课程项目，熟悉 PyTorch、NLP、召回排序和特征工程，有 Kaggle 竞赛经历，想找算法实习。"
  },
  {
    research: "RISC-V 编译器、LLVM、微架构性能优化",
    profile:
      "孙同学，计算机体系结构方向，研究编译优化和 RISC-V 基础软件，熟悉 C/C++、LLVM、GCC 和性能分析，希望找芯片基础软件或系统优化方向。"
  }
];

const importedJobs = Array.isArray(window.JOB_LIBRARY) ? window.JOB_LIBRARY : [];
let jobs = [];
let sampleIndex = 0;

const broadKeywords = [
  "llm",
  "大模型",
  "python",
  "java",
  "go",
  "c++",
  "c/c++",
  "linux",
  "pytorch",
  "tensorflow",
  "深度学习",
  "机器学习",
  "分布式",
  "论文",
  "开源",
  "顶会",
  "算法",
  "优化",
  "科研",
  "计算机",
  "产品",
  "数据",
  "建模"
];

const broadKeywordSet = new Set(broadKeywords.map(normalize));

const taxonomyRules = [
  {
    job_family: "AI Infra",
    domain: "大模型系统",
    sub_domain: "大模型推理优化",
    core_problem: "提升大模型推理吞吐、显存效率、延迟和服务稳定性。",
    core_keywords: ["kv cache", "pagedattention", "vllm", "sglang", "tensorrt-llm", "trt-llm", "推理优化", "prefill", "decode", "attention", "kvcache"],
    strong_keywords: ["cuda kernel", "cuda", "nccl", "gpu", "显存", "算子", "模型压缩", "量化", "tensor parallel", "并行推理"],
    broad_keywords: ["llm", "大模型", "python", "pytorch", "深度学习", "分布式"],
    negative_keywords: ["只做 prompt", "只调用 api", "前端页面", "产品运营"],
    must_have: ["推理系统经验", "GPU/CUDA 或高性能计算经验", "大模型服务优化经验"],
    strong_plus: ["vLLM/SGLang/TensorRT-LLM", "KV Cache/PagedAttention", "NCCL/多卡并行"],
    weak_plus: ["Python/PyTorch", "大模型使用经验"],
    target_profile: "适合做过大模型推理框架、GPU 算子、显存优化或高性能服务系统的候选人。"
  },
  {
    job_family: "AI Infra",
    domain: "机器学习系统",
    sub_domain: "分布式训练",
    core_problem: "提升大规模模型训练效率、稳定性、资源利用率和工程可扩展性。",
    core_keywords: ["megatron", "deepspeed", "fsdp", "zero", "分布式训练", "训练框架", "多机多卡", "并行训练", "rlhf", "sft"],
    strong_keywords: ["nccl", "gpu", "cuda", "调度", "容错", "checkpoint", "混合并行", "数据并行", "流水线并行"],
    broad_keywords: ["llm", "大模型", "python", "pytorch", "分布式", "深度学习"],
    negative_keywords: ["只做数据标注", "只做应用层 demo"],
    must_have: ["分布式训练经验", "PyTorch/训练框架经验", "大规模实验或工程落地经验"],
    strong_plus: ["Megatron/DeepSpeed/FSDP", "NCCL/多机多卡", "训练稳定性优化"],
    weak_plus: ["Python/PyTorch", "模型训练经历"],
    target_profile: "适合做过分布式训练、模型训练框架、训练稳定性或 GPU 集群训练的候选人。"
  },
  {
    job_family: "算法",
    domain: "计算机视觉",
    sub_domain: "多模态理解与生成",
    core_problem: "让模型理解、检索或生成图像、视频、文档等多模态内容。",
    core_keywords: ["多模态", "vlm", "clip", "视频理解", "图文检索", "文档理解", "ocr", "diffusion", "扩散模型"],
    strong_keywords: ["cvpr", "iccv", "eccv", "视觉语言", "layout", "图像生成", "视频生成", "rag", "检索"],
    broad_keywords: ["大模型", "llm", "pytorch", "深度学习", "python"],
    negative_keywords: ["纯后端", "纯运维"],
    must_have: ["多模态模型经验", "视觉/文档/视频任务经验", "模型训练或评测经验"],
    strong_plus: ["CVPR/ICCV/ECCV 论文", "图文检索/视频理解/RAG", "扩散模型或 VLM"],
    weak_plus: ["PyTorch", "深度学习基础"],
    target_profile: "适合有多模态、视觉语言模型、图文检索、文档理解或图像/视频生成经验的候选人。"
  },
  {
    job_family: "算法",
    domain: "智能体与强化学习",
    sub_domain: "Agent/RL",
    core_problem: "提升智能体规划、工具调用、任务执行、强化学习训练和安全评测能力。",
    core_keywords: ["agent", "智能体", "tool use", "function calling", "强化学习", "rl", "grpo", "ppo", "规划", "agentic"],
    strong_keywords: ["sandbox", "浏览器自动化", "computer use", "安全评测", "对齐", "reward", "post-training", "多智能体"],
    broad_keywords: ["llm", "大模型", "python", "pytorch", "深度学习"],
    negative_keywords: ["只做 chatbot", "只做 prompt"],
    must_have: ["Agent 或强化学习经验", "任务规划/工具调用经验", "实验评测或系统落地能力"],
    strong_plus: ["GRPO/PPO/RLHF/RLVR", "Agent 安全/沙箱/评测", "Computer Use/Browser Use"],
    weak_plus: ["大模型应用经验", "Prompt 调优"],
    target_profile: "适合做过智能体、工具调用、强化学习训练、Agent 安全或自动化任务评测的候选人。"
  },
  {
    job_family: "机器人",
    domain: "机器人控制",
    sub_domain: "SLAM/具身智能",
    core_problem: "让机器人在真实或仿真环境中完成感知、定位、规划、控制和泛化。",
    core_keywords: ["slam", "ros", "机器人", "具身智能", "vla", "控制", "路径规划", "sim2real"],
    strong_keywords: ["强化学习", "模仿学习", "传感器融合", "3d", "点云", "运动规划", "机械臂"],
    broad_keywords: ["python", "c++", "深度学习", "大模型"],
    negative_keywords: ["纯 web", "纯数据分析"],
    must_have: ["机器人/SLAM/控制经验", "仿真或真实机器人项目", "C++/ROS 或控制算法能力"],
    strong_plus: ["Sim2Real", "VLA/具身智能", "运动规划/传感器融合"],
    weak_plus: ["Python/C++", "深度学习"],
    target_profile: "适合做过 SLAM、ROS、机器人控制、具身智能或 Sim2Real 的候选人。"
  },
  {
    job_family: "芯片",
    domain: "芯片架构",
    sub_domain: "RISC-V/微架构",
    core_problem: "围绕指令集、微架构、性能建模和软硬件协同提升芯片系统能力。",
    core_keywords: ["risc-v", "riscv", "微架构", "指令集", "处理器", "流水线", "分支预测", "rvv"],
    strong_keywords: ["汇编", "pmu", "性能计数器", "缓存", "体系结构", "软硬件协同", "soc", "chiplet"],
    broad_keywords: ["c++", "python", "算法", "优化", "计算机"],
    negative_keywords: ["只做 web", "只做数据分析"],
    must_have: ["计算机体系结构基础", "RISC-V/处理器/微架构经验", "底层性能分析能力"],
    strong_plus: ["RVV/PMU/汇编优化", "处理器开发", "体系结构论文"],
    weak_plus: ["C/C++/Python", "算法基础"],
    target_profile: "适合研究 RISC-V、处理器微架构、体系结构性能建模或软硬件协同的候选人。"
  },
  {
    job_family: "芯片",
    domain: "编译器",
    sub_domain: "LLVM/GCC/AI 编译器",
    core_problem: "通过编译器、图优化和算子生成提升软件与硬件执行效率。",
    core_keywords: ["llvm", "gcc", "编译器", "编译优化", "mlir", "tvm", "xla", "代码生成", "图优化"],
    strong_keywords: ["risc-v", "汇编", "算子融合", "自动调优", "polyhedral", "后端优化", "中间表示"],
    broad_keywords: ["c++", "python", "算法", "优化"],
    negative_keywords: ["只做业务后端", "只做前端"],
    must_have: ["编译原理/编译器项目经验", "LLVM/GCC/MLIR 等框架经验", "C/C++ 底层开发能力"],
    strong_plus: ["LLVM/GCC 开源贡献", "RISC-V 编译优化", "AI 编译器/算子优化"],
    weak_plus: ["C++/Python", "算法基础"],
    target_profile: "适合做过 LLVM/GCC/MLIR/AI 编译器、代码生成或底层性能优化的候选人。"
  },
  {
    job_family: "芯片",
    domain: "EDA",
    sub_domain: "EDA/芯片设计自动化",
    core_problem: "用算法和工程系统提升芯片设计、验证、布局布线或仿真效率。",
    core_keywords: ["eda", "布局布线", "形式化验证", "逻辑综合", "时序分析", "place and route", "verilog", "systemverilog"],
    strong_keywords: ["芯片验证", "仿真", "电路", "rtl", "优化算法", "约束求解"],
    broad_keywords: ["c++", "python", "算法", "优化"],
    negative_keywords: ["只做应用开发"],
    must_have: ["EDA 或芯片设计自动化经验", "算法/优化/验证能力", "C++/Python 工程能力"],
    strong_plus: ["布局布线/形式化验证/逻辑综合", "RTL/Verilog", "EDA 工具开发"],
    weak_plus: ["C++/Python", "算法基础"],
    target_profile: "适合有 EDA、芯片验证、布局布线、逻辑综合或形式化验证经验的候选人。"
  },
  {
    job_family: "后端",
    domain: "云原生与基础架构",
    sub_domain: "分布式系统/存储/网络",
    core_problem: "建设高可用、高性能、可扩展的云平台、存储、网络和服务端系统。",
    core_keywords: ["分布式系统", "云原生", "kubernetes", "k8s", "存储系统", "高性能网络", "rdma", "数据库内核", "调度系统"],
    strong_keywords: ["容器", "微服务", "一致性协议", "raft", "rocksdb", "ceph", "ebpf", "service mesh"],
    broad_keywords: ["java", "go", "python", "linux", "分布式", "后端"],
    negative_keywords: ["只做算法论文", "纯前端"],
    must_have: ["分布式系统或后端工程经验", "服务稳定性/性能优化经验", "系统设计能力"],
    strong_plus: ["K8s/存储/网络/数据库内核", "大规模系统实践", "开源基础设施贡献"],
    weak_plus: ["Java/Go/Python", "Linux"],
    target_profile: "适合做过云原生、分布式系统、存储网络、数据库内核或大规模后端系统的候选人。"
  },
  {
    job_family: "算法",
    domain: "搜索推荐广告",
    sub_domain: "召回/排序/检索",
    core_problem: "提升搜索、推荐、广告、检索和排序系统的效果与效率。",
    core_keywords: ["推荐", "搜索", "广告", "召回", "排序", "ranking", "retrieval", "embedding", "reranker"],
    strong_keywords: ["向量检索", "图模型", "ctr", "用户行为", "ab test", "特征工程", "搜索推荐"],
    broad_keywords: ["机器学习", "深度学习", "python", "pytorch", "数据"],
    negative_keywords: ["只做视觉生成", "只做芯片底层"],
    must_have: ["搜索/推荐/广告算法经验", "召回排序或检索经验", "实验分析能力"],
    strong_plus: ["Embedding/Reranker/向量检索", "A/B Test", "大规模用户行为建模"],
    weak_plus: ["机器学习/Python", "数据分析"],
    target_profile: "适合做过搜索推荐、广告算法、召回排序、向量检索或用户行为建模的候选人。"
  },
  {
    job_family: "数据",
    domain: "数据科学",
    sub_domain: "数据分析/增长实验",
    core_problem: "通过数据分析、指标体系、实验和建模支持业务决策与增长。",
    core_keywords: ["数据分析", "ab test", "指标体系", "增长", "统计建模", "因果推断"],
    strong_keywords: ["sql", "tableau", "powerbi", "可视化", "用户留存", "实验设计"],
    broad_keywords: ["python", "数据", "统计", "建模"],
    negative_keywords: ["只做底层编译", "只做芯片"],
    must_have: ["SQL/数据分析能力", "指标和实验设计能力", "业务问题拆解能力"],
    strong_plus: ["A/B Test/因果推断", "增长分析", "可视化看板"],
    weak_plus: ["Python/统计基础"],
    target_profile: "适合做过数据分析、增长实验、指标体系或业务建模的候选人。"
  }
];

jobs = (importedJobs.length ? [...importedJobs] : [...sampleJobs]).map(enrichJobProfile);

const jobList = document.querySelector("#job-list");
const jobCount = document.querySelector("#job-count");
const jobSearch = document.querySelector("#job-search");
const researchField = document.querySelector("#research-field");
const departmentFilter = document.querySelector("#department-filter");
const locationFilter = document.querySelector("#location-filter");
const resultLimit = document.querySelector("#result-limit");
const matchButton = document.querySelector("#match-button");
const results = document.querySelector("#match-results");
const statusLabel = document.querySelector("#analysis-status");
const selectedJobTools = document.querySelector("#selected-job-tools");
const selectedJobCount = document.querySelector("#selected-job-count");
const copySelectedJobsButton = document.querySelector("#copy-selected-jobs");
const clearSelectedJobsButton = document.querySelector("#clear-selected-jobs");
const selectedCopyStatus = document.querySelector("#selected-copy-status");
const jobFile = document.querySelector("#job-file");
const importJobButton = document.querySelector(".import-job-button");
const modeTabs = [...document.querySelectorAll("[data-source-mode]")];
const sourcePanels = [...document.querySelectorAll("[data-source-panel]")];
const commentName = document.querySelector("#comment-name");
const commentText = document.querySelector("#comment-text");
const commentSubmit = document.querySelector("#comment-submit");
const commentStatus = document.querySelector("#comment-status");
const commentList = document.querySelector("#comment-list");
const contactButtons = [...document.querySelectorAll("[data-contact-target]")];
const contactPanels = [...document.querySelectorAll("[data-contact-panel]")];

let activeSourceMode = "research";
const selectedJobs = new Map();
const commentStorageKey = "star-job-match-comments";
const feedbackStorageKey = "star-job-match-feedback-v1";
const ownerModeStorageKey = "star-job-match-owner-mode";
let ownerMode = false;

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function detectOwnerMode() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("owner") === "1") {
    localStorage.setItem(ownerModeStorageKey, "true");
  }
  if (params.get("owner") === "0") {
    localStorage.removeItem(ownerModeStorageKey);
  }
  return localStorage.getItem(ownerModeStorageKey) === "true";
}

function syncOwnerControls() {
  ownerMode = detectOwnerMode();
  if (!jobFile || !importJobButton) return;

  jobFile.disabled = !ownerMode;
  importJobButton.classList.toggle("is-locked", !ownerMode);
  importJobButton.setAttribute("aria-disabled", String(!ownerMode));
  importJobButton.title = ownerMode ? "平台所有者可导入岗位" : "仅平台所有者可操作";
}

function renderJobs() {
  const displayedJobs = filterJobsBySearch();
  jobCount.textContent = jobSearch.value
    ? `${displayedJobs.length} / ${jobs.length} 个`
    : `${jobs.length} 个`;

  if (!displayedJobs.length) {
    jobList.innerHTML = `<div class="job-empty">没有找到岗位名称包含“${escapeHtml(jobSearch.value)}”的岗位。</div>`;
    return;
  }

  jobList.innerHTML = displayedJobs
    .map(
      (job) => `
        <a class="job-item" href="${escapeHtml(job.source || "#")}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(job.title)}</strong>
          <span>${escapeHtml(job.department)} · ${escapeHtml(job.location)}&nbsp;&nbsp;${escapeHtml(job.job_profile.job_family)} · ${escapeHtml(job.job_profile.domain)}</span>
        </a>
      `
    )
    .join("");
}

function filterJobsBySearch() {
  const query = normalize(jobSearch.value);
  if (!query) return jobs;

  const terms = query.split(/[\s,，、;；/]+/).filter(Boolean);
  return jobs.filter((job) => {
    const title = normalize(job.title);
    return title.includes(query) || terms.some((term) => title.includes(term));
  });
}

function renderFilters() {
  const departments = dedupe(jobs.map((job) => job.department).filter(Boolean)).sort((a, b) =>
    a.localeCompare(b, "zh-CN")
  );
  const locations = dedupe(jobs.flatMap((job) => splitLocation(job.location))).sort((a, b) =>
    a.localeCompare(b, "zh-CN")
  );

  renderSelectOptions(departmentFilter, departments, "全部部门");
  renderSelectOptions(locationFilter, locations, "全部地点");
}

function renderSelectOptions(select, options, placeholder) {
  const currentValue = select.value;
  select.innerHTML = [
    `<option value="">${placeholder}</option>`,
    ...options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
  ].join("");

  if (options.includes(currentValue)) {
    select.value = currentValue;
  }
}

function setSourceMode(mode) {
  activeSourceMode = mode;
  modeTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.sourceMode === mode);
  });
  sourcePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.sourcePanel === mode);
  });
}

function scoreJob(job, candidateProfile, feedbackStore = loadFeedbackStore()) {
  const profile = job.job_profile;
  const keywordMatch = matchManualSearchKeywords(candidateProfile.manual_query_terms, profile.search_keywords);
  const manualKeywordHits = keywordMatch.exactHits;
  const partialKeywordHits = keywordMatch.partialHits;
  const allKeywordHits = dedupe([...manualKeywordHits, ...partialKeywordHits]);
  const manualKeywordCoverage = queryCoverage(candidateProfile.manual_query_terms, profile.search_keywords);
  const directionHits = matchTerms(candidateProfile.searchText, [
    profile.domain,
    profile.sub_domain,
    profile.core_problem,
    ...profile.search_keywords,
    ...profile.core_keywords
  ]);
  const coreHits = matchTerms(candidateProfile.searchText, profile.core_keywords);
  const mustHaveHits = matchTerms(candidateProfile.searchText, profile.must_have);
  const skillHits = matchTerms(candidateProfile.searchText, [
    ...profile.core_keywords,
    ...profile.strong_keywords,
    ...profile.weak_plus
  ]);
  const plusHits = matchTerms(candidateProfile.searchText, profile.strong_plus);
  const broadHits = matchTerms(candidateProfile.searchText, profile.broad_keywords);
  const negativeHits = matchTerms(candidateProfile.searchText, profile.negative_signals);
  const evidenceHits = findEvidenceHits(candidateProfile.evidence, [
    ...allKeywordHits,
    ...directionHits,
    ...coreHits,
    ...mustHaveHits,
    ...skillHits,
    ...plusHits
  ]);

  const coreCoverage = weightedCoverage(coreHits, profile.core_keywords);
  const keywordTier = manualKeywordHits.length ? 2 : partialKeywordHits.length ? 1 : 0;
  const manualKeywordScore = manualKeywordHits.length
    ? 100
    : partialKeywordHits.length
      ? Math.min(45, partialKeywordHits.length * 12 + manualKeywordCoverage * 20)
      : 0;
  const specificCoreHits = coreHits.filter((term) => !broadKeywordSet.has(normalize(term)));
  const specificCoreBoost = Math.min(100, specificCoreHits.length * 28);
  const direction_score = Math.max(
    weightedCoverage(directionHits, [profile.domain, profile.sub_domain, ...profile.search_keywords, ...profile.core_keywords]),
    coreCoverage,
    manualKeywordScore,
    specificCoreBoost
  );
  const must_have_score = Math.max(
    weightedCoverage(mustHaveHits, profile.must_have),
    coreCoverage * 0.9,
    manualKeywordScore * 0.85,
    Math.min(100, specificCoreHits.length * 24)
  );
  const evidence_score = Math.min(
    100,
    evidenceHits.length * 24 + manualKeywordHits.length * 32 + candidateProfile.projects.length * 8 + candidateProfile.papers.length * 12
  );
  const skill_score = Math.max(
    weightedCoverage(skillHits, [...profile.search_keywords, ...profile.core_keywords, ...profile.strong_keywords]),
    coreCoverage * 0.75,
    manualKeywordScore * 0.75,
    Math.min(100, specificCoreHits.length * 18)
  );
  const seniority_location_score = scoreSeniorityAndLocation(profile, candidateProfile);
  const plus_score = weightedCoverage(plusHits, profile.strong_plus);
  const penalty_score = calculatePenalty({
    profile,
    candidateProfile,
    directionHits,
    coreHits,
    mustHaveHits,
    broadHits,
    negativeHits,
    manualKeywordHits: allKeywordHits,
    evidenceHits
  });

  const base_score = clamp(
    direction_score * 0.3 +
      must_have_score * 0.25 +
      evidence_score * 0.2 +
      skill_score * 0.1 +
      seniority_location_score * 0.1 +
      plus_score * 0.05 -
      penalty_score,
    0,
    100
  );
  const feedbackSignal = getFeedbackSignal(job, candidateProfile, feedbackStore);
  const total_score = clamp(base_score + feedbackSignal.score, 0, 100);

  return {
    ...job,
    total_score: Math.round(total_score),
    match_level: getMatchLevel(total_score),
    feedback_signal: feedbackSignal,
    scores: {
      direction_score: Math.round(direction_score),
      must_have_score: Math.round(must_have_score),
      evidence_score: Math.round(evidence_score),
      skill_score: Math.round(skill_score),
      seniority_location_score: Math.round(seniority_location_score),
      plus_score: Math.round(plus_score),
      penalty_score: Math.round(penalty_score),
      manual_keyword_score: Math.round(manualKeywordScore),
      query_keyword_score: Math.round(manualKeywordScore),
      keyword_tier: keywordTier,
      exact_keyword_count: manualKeywordHits.length,
      partial_keyword_count: partialKeywordHits.length,
      base_score: Math.round(base_score),
      feedback_score: feedbackSignal.score
    },
    matched_abilities: dedupe([...allKeywordHits, ...directionHits, ...coreHits, ...mustHaveHits, ...skillHits, ...plusHits]).slice(0, 10),
    missing_abilities: profile.must_have.filter((item) => !mustHaveHits.includes(item)).slice(0, 5),
    evidence_hits: evidenceHits.slice(0, 5),
    broad_hits: broadHits,
    negative_hits: negativeHits,
    recommendation_reason: buildStructuredReason(profile, directionHits, mustHaveHits, evidenceHits),
    candidate_evidence: buildCandidateEvidence(evidenceHits, candidateProfile),
    risks: buildStructuredRisks(profile, mustHaveHits, broadHits, negativeHits, directionHits),
    hr_talk_track: buildHrTalkTrack(profile, directionHits, evidenceHits)
  };
}

function buildStructuredReason(profile, directionHits, mustHaveHits, evidenceHits) {
  const directionText = directionHits.length
    ? `方向命中 ${directionHits.slice(0, 4).join("、")}`
    : `岗位方向为 ${profile.domain}/${profile.sub_domain}`;
  const mustText = mustHaveHits.length ? `必备能力命中 ${mustHaveHits.slice(0, 3).join("、")}` : "必备能力仍需确认";
  const evidenceText = evidenceHits.length
    ? `证据来自“${evidenceHits[0].evidence}”`
    : "候选人输入中缺少明确项目、论文或主页证据";
  return `${directionText}；${mustText}；${evidenceText}。`;
}

function buildCandidateEvidence(evidenceHits, candidateProfile) {
  if (evidenceHits.length) {
    return evidenceHits.map((item) => `${item.term}：${item.evidence}`).slice(0, 4);
  }
  if (candidateProfile.projects.length) return candidateProfile.projects.slice(0, 3);
  if (candidateProfile.research_direction) return [`研究方向：${candidateProfile.research_direction}`];
  return ["当前输入信息较少，建议补充项目、论文或主页内容作为证据。"];
}

function buildStructuredRisks(profile, mustHaveHits, broadHits, negativeHits, directionHits) {
  const risks = [];
  const missing = profile.must_have.filter((item) => !mustHaveHits.includes(item)).slice(0, 3);
  if (missing.length) risks.push(`缺失或未体现：${missing.join("、")}`);
  if (!directionHits.length) risks.push(`候选人方向与 ${profile.domain}/${profile.sub_domain} 的直接证据不足`);
  if (broadHits.length && !directionHits.length) risks.push(`仅命中泛化词：${broadHits.slice(0, 4).join("、")}，已降权`);
  if (negativeHits.length) risks.push(`存在误导信号：${negativeHits.slice(0, 3).join("、")}`);
  return risks.length ? risks : ["核心方向和证据较完整，建议进入沟通确认。"];
}

function buildHrTalkTrack(profile, directionHits, evidenceHits) {
  const evidence = evidenceHits[0]?.evidence || "其项目、论文或主页经历";
  const direction = directionHits.slice(0, 2).join("、") || profile.sub_domain;
  return `可以重点和同学确认 ${direction} 的具体深度，例如 ${evidence} 中承担的工作、实验规模、工程落地情况，以及是否愿意匹配 ${profile.domain} 方向。`;
}

function renderMatches() {
  const candidate = getCandidatePayload();
  if (!candidate.profileText && !candidate.researchText) {
    statusLabel.textContent = "待输入";
    results.classList.add("empty-state");
    results.textContent = "请先选择一种方式录入候选人信息。";
    updateSelectedJobTools();
    return;
  }

  const candidateProfile = parseCandidateProfile(candidate);
  const feedbackStore = loadFeedbackStore();
  const ranked = jobs
    .filter((job) => matchesFilters(job))
    .map((job) => scoreJob(job, candidateProfile, feedbackStore))
    .filter((job) => job.scores.keyword_tier > 0)
    .sort(
      (a, b) =>
        b.scores.keyword_tier - a.scores.keyword_tier ||
        b.scores.exact_keyword_count - a.scores.exact_keyword_count ||
        b.scores.partial_keyword_count - a.scores.partial_keyword_count ||
        b.scores.feedback_score - a.scores.feedback_score ||
        b.scores.manual_keyword_score - a.scores.manual_keyword_score ||
        b.total_score - a.total_score ||
        b.scores.direction_score - a.scores.direction_score
    )
    .slice(0, getResultLimit());

  if (!ranked.length) {
    statusLabel.textContent = "无结果";
    results.classList.add("empty-state");
    results.textContent = "未命中岗位搜索关键词（人工），请换一个更明确的关键词或补充完整方向。";
    updateSelectedJobTools();
    return;
  }

  statusLabel.textContent = "已完成";
  results.classList.remove("empty-state");
  refreshSelectedJobsFromRanked(ranked);
  results.innerHTML = ranked
    .map(
      (match, index) => `
        <article class="result-card">
          <div class="result-title">
            <div>
              <h4>${index + 1}. ${escapeHtml(match.title)}</h4>
              <div class="result-meta">${escapeHtml(match.department)} · ${escapeHtml(match.location)}</div>
            </div>
            <div class="result-title-actions">
              ${renderSelectJobControl(match, index)}
              <span class="score level-${match.match_level.toLowerCase()}">${match.match_level}</span>
            </div>
          </div>
          <div class="result-actions">
            ${renderSourceTools(match.source)}
            ${renderFeedbackTools(match.id || match.title, match.feedback_signal)}
          </div>
        </article>
      `
    )
    .join("");
  updateSelectedJobTools();
}

function getResultLimit() {
  const selected = Number(resultLimit.value || 6);
  return clamp(Number.isFinite(selected) ? selected : 6, 1, 10);
}

function renderCandidateProfile(profile) {
  return `
    <section class="candidate-profile">
      <div>
        <p class="eyebrow">候选人画像</p>
        <h4>${escapeHtml(profile.candidate_profile)}</h4>
      </div>
      <div class="profile-tags">
        ${renderTag("研究方向", profile.research_direction)}
        ${renderTag("细分方向", profile.sub_direction)}
        ${renderTag("学历/年级", profile.seniority)}
        ${profile.skills.slice(0, 8).map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderTag(label, value) {
  if (!value) return "";
  return `<span><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</span>`;
}

function renderScorePill(label, value) {
  return `<span><strong>${escapeHtml(label)}</strong>${Number(value)}</span>`;
}

function renderDetailBlock(title, items, className = "") {
  const cleanItems = items.filter(Boolean);
  if (!cleanItems.length) return "";
  return `
    <div class="detail-block ${className}">
      <strong>${escapeHtml(title)}</strong>
      <ul>
        ${cleanItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function enrichJobProfile(job) {
  if (job.job_profile) {
    return {
      ...job,
      job_profile: normalizeImportedJobProfile(job.job_profile, job)
    };
  }

  const sourceText = [
    job.title,
    job.department,
    job.description,
    job.requirementsText,
    ...(job.required || []),
    ...(job.bonus || [])
  ].join("\n");
  const rule = pickBestTaxonomy(sourceText);
  const coreHits = matchTerms(sourceText, rule.core_keywords);
  const strongHits = matchTerms(sourceText, rule.strong_keywords);
  const broadHits = matchTerms(sourceText, [...rule.broad_keywords, ...broadKeywords]);
  const negativeHits = matchTerms(sourceText, rule.negative_keywords);

  return {
    ...job,
    job_profile: {
      job_family: rule.job_family,
      domain: rule.domain,
      sub_domain: rule.sub_domain,
      core_problem: inferCoreProblem(job, rule),
      must_have: dedupe([...rule.must_have, ...coreHits.slice(0, 4)]).slice(0, 8),
      strong_plus: dedupe([...rule.strong_plus, ...strongHits.slice(0, 5)]).slice(0, 8),
      weak_plus: dedupe([...rule.weak_plus, ...broadHits.slice(0, 5)]).slice(0, 8),
      broad_keywords: dedupe([...rule.broad_keywords, ...broadHits]).slice(0, 12),
      negative_signals: dedupe([...rule.negative_keywords, ...negativeHits]).slice(0, 8),
      target_profile: rule.target_profile,
      search_keywords: [],
      core_keywords: (coreHits.length ? dedupe(coreHits) : rule.core_keywords.slice(0, 5)).slice(0, 16),
      strong_keywords: (strongHits.length ? dedupe(strongHits) : rule.strong_keywords.slice(0, 5)).slice(0, 16),
      weak_keywords: dedupe([...rule.weak_plus, ...broadHits]).slice(0, 12)
    }
  };
}

function normalizeImportedJobProfile(profile, job) {
  return {
    profile_id: profile.profile_id || job.profile_id || "",
    job_family: profile.job_family || "待复核",
    domain: profile.domain || "待复核",
    sub_domain: profile.sub_domain || "待复核",
    core_problem: profile.core_problem || job.description || "需结合岗位JD进一步确认核心问题。",
    must_have: ensureArray(profile.must_have),
    strong_plus: ensureArray(profile.strong_plus),
    weak_plus: ensureArray(profile.weak_plus),
    broad_keywords: ensureArray(profile.broad_keywords),
    negative_signals: ensureArray(profile.negative_signals),
    target_profile: profile.target_profile || "需人工确认。",
    search_keywords: ensureArray(profile.search_keywords),
    core_keywords: ensureArray(profile.core_keywords),
    strong_keywords: ensureArray(profile.strong_keywords),
    weak_keywords: ensureArray(profile.weak_keywords || profile.weak_plus),
    seniority_requirement: profile.seniority_requirement || "",
    research_direction_suggestion: profile.research_direction_suggestion || "",
    recall_tags: ensureArray(profile.recall_tags),
    ranking_focus: profile.ranking_focus || "",
    hr_tip: profile.hr_tip || "",
    confidence: profile.confidence || ""
  };
}

function ensureArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return String(value)
    .split(/[、,，;；/]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function pickBestTaxonomy(text) {
  const normalized = normalize(text);
  const scored = taxonomyRules.map((rule) => {
    const core = rule.core_keywords.filter((term) => normalized.includes(normalize(term))).length * 8;
    const strong = rule.strong_keywords.filter((term) => normalized.includes(normalize(term))).length * 4;
    const domain = [rule.domain, rule.sub_domain, rule.job_family].filter((term) => normalized.includes(normalize(term))).length * 10;
    return { rule, score: core + strong + domain + taxonomyPriorityBonus(rule, normalized) };
  });
  return scored.sort((a, b) => b.score - a.score)[0]?.rule || taxonomyRules[0];
}

function taxonomyPriorityBonus(rule, normalizedText) {
  if (rule.domain === "编译器" && /多模态传输|moq|quic|拥塞控制|传输协议|音视频|ietf|bbr|cubic/.test(normalizedText)) return -60;
  if (rule.domain === "编译器" && /llvm|gcc|mlir|编译器|编译优化|代码生成/.test(normalizedText)) return 26;
  if (rule.sub_domain.includes("RISC-V") && /risc-v|riscv|微架构|指令集|处理器/.test(normalizedText)) return 18;
  if (rule.sub_domain === "大模型推理优化" && /kv cache|pagedattention|vllm|tensorrt|推理优化|prefill|decode/.test(normalizedText)) return 26;
  if (rule.sub_domain === "分布式训练" && /megatron|deepspeed|fsdp|分布式训练|多机多卡/.test(normalizedText)) return 22;
  if (rule.sub_domain === "SLAM/具身智能" && /slam|ros|机器人|具身|sim2real/.test(normalizedText)) return 24;
  if (rule.sub_domain === "EDA/芯片设计自动化" && /eda|布局布线|形式化验证|逻辑综合|verilog/.test(normalizedText)) return 24;
  return 0;
}

function inferCoreProblem(job, rule) {
  const description = String(job.description || "");
  const firstSentence = description
    .split(/[。；;\n]/)
    .map((item) => item.replace(/^\d+[、.]/, "").trim())
    .find((item) => item.length > 10);
  return firstSentence || rule.core_problem;
}

function parseCandidateProfile(candidate) {
  const combinedText = [candidate.researchText, candidate.profileText].filter(Boolean).join("\n");
  const bestRule = pickBestTaxonomy(combinedText);
  const extractedSkills = extractSkills(combinedText);
  const evidence = extractEvidence(combinedText, extractedSkills);
  const projects = extractSegments(combinedText, ["项目", "系统", "平台", "助手", "实现", "开发", "优化", "工程", "落地"]);
  const papers = extractSegments(combinedText, ["论文", "cvpr", "icml", "iclr", "neurips", "acl", "emnlp", "sigir", "kdd", "顶会"]);
  const homepageSignals = extractSegments(combinedText, ["github", "主页", "开源", "star", "博客", "portfolio", "homepage"]);
  const seniority = extractSeniority(combinedText);
  const researchDirection = candidate.researchText || bestRule.domain;

  return {
    research_direction: researchDirection,
    sub_direction: bestRule.sub_domain,
    skills: extractedSkills,
    projects,
    papers,
    github_or_homepage_signals: homepageSignals,
    evidence,
    seniority,
    candidate_profile: buildCandidateProfileText(bestRule, extractedSkills, seniority, projects, papers),
    query_terms: extractQueryTerms(combinedText),
    manual_query_terms: extractManualQueryTerms(combinedText),
    searchText: normalize(combinedText),
    rawText: combinedText
  };
}

function extractSkills(text) {
  const keywordPool = dedupe(
    taxonomyRules.flatMap((rule) => [
      ...rule.core_keywords,
      ...rule.strong_keywords,
      ...rule.broad_keywords,
      ...rule.strong_plus,
      ...rule.weak_plus
    ])
  );
  return matchTerms(text, keywordPool).slice(0, 24);
}

function extractEvidence(text, terms) {
  const sentences = splitEvidenceSentences(text);
  return terms
    .map((term) => {
      const evidence = sentences.find((sentence) => normalize(sentence).includes(normalize(term)));
      return evidence ? { term, evidence: trimEvidence(evidence) } : null;
    })
    .filter(Boolean);
}

function extractSegments(text, markers) {
  const normalizedMarkers = markers.map(normalize);
  return splitEvidenceSentences(text)
    .filter((sentence) => normalizedMarkers.some((marker) => normalize(sentence).includes(marker)))
    .map(trimEvidence)
    .slice(0, 5);
}

function splitEvidenceSentences(text) {
  return String(text || "")
    .split(/[\n。；;.!?？]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 4);
}

function trimEvidence(text) {
  return text.length > 90 ? `${text.slice(0, 90)}...` : text;
}

function extractSeniority(text) {
  const normalized = normalize(text);
  if (normalized.includes("博士")) return "博士";
  if (normalized.includes("硕士") || normalized.includes("研究生")) return "硕士";
  if (normalized.includes("本科")) return "本科";
  const year = normalized.match(/20\d{2}届|20\d{2}年毕业/);
  return year ? year[0] : "未明确";
}

function buildCandidateProfileText(rule, skills, seniority, projects, papers) {
  const skillText = skills.slice(0, 4).join("、") || "待补充技能";
  const evidenceText = papers.length ? "有论文信号" : projects.length ? "有项目信号" : "证据信息较少";
  return `${seniority}候选人，方向偏 ${rule.domain}/${rule.sub_domain}，技能包含 ${skillText}，${evidenceText}`;
}

function matchTerms(text, terms) {
  const normalized = normalize(text);
  return dedupe(
    terms.filter((term) => {
      const normalizedTerm = normalize(term);
      return normalizedTerm && normalized.includes(normalizedTerm);
    })
  );
}

function extractQueryTerms(text) {
  return dedupe(
    normalize(text)
      .split(/[\s,，、;；\n/|]+/)
      .map((item) => item.trim())
      .filter((item) => item.length > 1 && !broadKeywordSet.has(item))
  ).slice(0, 12);
}

function extractManualQueryTerms(text) {
  const normalizedText = normalize(text);
  if (!normalizedText) return [];

  const terms = [normalizedText];
  const segments = normalizedText
    .split(/[,，、;；\n|]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  segments.forEach((segment) => {
    terms.push(segment);
    const tokens = segment.split(/\s+/).filter(Boolean);
    tokens.forEach((token) => terms.push(token));
    for (let start = 0; start < tokens.length; start += 1) {
      for (let end = start + 2; end <= Math.min(tokens.length, start + 4); end += 1) {
        terms.push(tokens.slice(start, end).join(" "));
      }
    }
  });

  return dedupe(terms.filter((term) => term.length > 1 && !broadKeywordSet.has(term))).slice(0, 30);
}

function compactTerm(term) {
  return normalize(term).replace(/\s+/g, "");
}

function isExactManualKeywordMatch(queryTerm, keyword) {
  const normalizedQuery = normalize(queryTerm);
  const normalizedKeyword = normalize(keyword);
  if (!normalizedQuery || !normalizedKeyword) return false;
  return normalizedQuery === normalizedKeyword || compactTerm(normalizedQuery) === compactTerm(normalizedKeyword);
}

function isPartialManualKeywordMatch(queryTerm, keyword) {
  const normalizedQuery = normalize(queryTerm);
  const normalizedKeyword = normalize(keyword);
  if (!normalizedQuery || !normalizedKeyword || isExactManualKeywordMatch(normalizedQuery, normalizedKeyword)) return false;

  const compactQuery = compactTerm(normalizedQuery);
  const compactKeyword = compactTerm(normalizedKeyword);
  return normalizedKeyword.includes(normalizedQuery) ||
    normalizedQuery.includes(normalizedKeyword) ||
    compactKeyword.includes(compactQuery) ||
    compactQuery.includes(compactKeyword);
}

function matchManualSearchKeywords(queryTerms, keywords) {
  if (!queryTerms.length) return { exactHits: [], partialHits: [] };

  const exactHits = dedupe(
    keywords.filter((keyword) =>
      queryTerms.some((term) => isExactManualKeywordMatch(term, keyword))
    )
  );

  const partialHits = dedupe(
    keywords.filter((keyword) =>
      !exactHits.includes(keyword) && queryTerms.some((term) => isPartialManualKeywordMatch(term, keyword))
    )
  );

  return { exactHits, partialHits };
}

function queryCoverage(queryTerms, fields) {
  if (!queryTerms.length) return 0;

  const normalizedFields = fields.filter(Boolean).map(normalize);
  const matchedCount = queryTerms.filter((term) =>
    normalizedFields.some((field) => isExactManualKeywordMatch(term, field))
  ).length;

  return matchedCount / queryTerms.length;
}

function getJobFeedbackKey(jobOrId) {
  if (typeof jobOrId === "object" && jobOrId) {
    return normalize(jobOrId.id || jobOrId.title);
  }
  return normalize(jobOrId);
}

function loadFeedbackStore() {
  try {
    return JSON.parse(localStorage.getItem(feedbackStorageKey) || "{}");
  } catch {
    return {};
  }
}

function saveFeedbackStore(store) {
  localStorage.setItem(feedbackStorageKey, JSON.stringify(store));
}

function getFeedbackSignal(job, candidateProfile, feedbackStore) {
  const record = feedbackStore[getJobFeedbackKey(job)];
  if (!record) {
    return { score: 0, preference: "", fit: 0, unfit: 0 };
  }

  const queryTerms = candidateProfile.manual_query_terms.map(normalize).filter(Boolean);
  const keywordSignals = queryTerms.reduce(
    (sum, term) => {
      const item = record.terms?.[term];
      if (!item) return sum;
      return {
        fit: sum.fit + Number(item.fit || 0),
        unfit: sum.unfit + Number(item.unfit || 0)
      };
    },
    { fit: 0, unfit: 0 }
  );
  const totalFit = Number(record.fit || 0);
  const totalUnfit = Number(record.unfit || 0);
  const keywordScore = keywordSignals.fit * 6 - keywordSignals.unfit * 8;
  const jobScore = totalFit * 2 - totalUnfit * 3;
  const score = clamp(keywordScore + jobScore, -25, 20);
  const preference = score > 0 ? "fit" : score < 0 ? "unfit" : "";
  return { score, preference, fit: totalFit, unfit: totalUnfit };
}

function getFeedbackTerms(job, candidateProfile) {
  const profile = job.job_profile || {};
  const keywordMatch = matchManualSearchKeywords(candidateProfile.manual_query_terms, profile.search_keywords || []);
  return dedupe(
    [
      ...candidateProfile.manual_query_terms,
      ...keywordMatch.exactHits,
      ...keywordMatch.partialHits
    ]
      .map(normalize)
      .filter((term) => term.length > 1 && !broadKeywordSet.has(term))
  ).slice(0, 24);
}

function findEvidenceHits(evidence, terms) {
  return terms
    .map((term) => evidence.find((item) => normalize(item.term) === normalize(term) || normalize(item.evidence).includes(normalize(term))))
    .filter(Boolean);
}

function weightedCoverage(hits, expected) {
  const meaningfulExpected = expected.filter(Boolean);
  if (!meaningfulExpected.length) return 0;
  const numerator = hits.reduce((sum, term) => sum + termSpecificity(term), 0);
  const denominator = meaningfulExpected.reduce((sum, term) => sum + termSpecificity(term), 0);
  return clamp((numerator / denominator) * 100, 0, 100);
}

function termSpecificity(term) {
  const normalized = normalize(term);
  if (broadKeywordSet.has(normalized)) return 0.25;
  if (normalized.length <= 2) return 0.5;
  if (/kv cache|pagedattention|vllm|tensorrt|megatron|nccl|cuda kernel|slam|ros|risc-v|eda|llvm|gcc|mlir/.test(normalized)) {
    return 2.2;
  }
  return 1;
}

function scoreSeniorityAndLocation(profile, candidateProfile) {
  let score = 55;
  if (candidateProfile.seniority.includes("博士") && /博士|科研|论文|架构|研究/.test(profile.target_profile)) score += 25;
  if (candidateProfile.seniority.includes("硕士") && /硕士|研究|算法|系统/.test(profile.target_profile)) score += 18;
  if (candidateProfile.rawText.includes(locationFilter.value) && locationFilter.value) score += 20;
  if (!locationFilter.value) score += 10;
  return clamp(score, 0, 100);
}

function calculatePenalty({ profile, directionHits, coreHits, mustHaveHits, broadHits, negativeHits, manualKeywordHits, evidenceHits }) {
  let penalty = 0;
  if (broadHits.length >= 3 && directionHits.length === 0 && !manualKeywordHits.length) penalty += 18;
  if (!mustHaveHits.length && coreHits.length < 2 && !manualKeywordHits.length) penalty += 16;
  if (!directionHits.length && !manualKeywordHits.length) penalty += 14;
  if (!evidenceHits.length && !manualKeywordHits.length) penalty += 10;
  if (negativeHits.length) penalty += Math.min(18, negativeHits.length * 6);
  const onlyWeak = broadHits.length > 0 && !matchTerms(broadHits.join(" "), profile.core_keywords).length;
  if (onlyWeak && directionHits.length < 2 && !manualKeywordHits.length) penalty += 8;
  return penalty;
}

function getMatchLevel(score) {
  if (score >= 85) return "S";
  if (score >= 70) return "A";
  if (score >= 50) return "B";
  return "C";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function matchesFilters(job) {
  const selectedDepartment = departmentFilter.value;
  const selectedLocation = locationFilter.value;
  const departmentMatched = !selectedDepartment || job.department === selectedDepartment;
  const locationMatched = !selectedLocation || splitLocation(job.location).includes(selectedLocation);
  return departmentMatched && locationMatched;
}

function getCandidatePayload() {
  return {
    researchText: researchField.value,
    profileText: researchField.value
  };
}

function renderSourceTools(source) {
  if (!source) return "";
  const safeSource = escapeHtml(source);
  return `
    <div class="source-tools">
      <button class="copy-link-button" type="button" data-copy-link="${safeSource}">复制链接</button>
      <a class="source-link" href="${safeSource}" target="_blank" rel="noreferrer">查看岗位详情</a>
    </div>
  `;
}

function renderSelectJobControl(match, index) {
  const jobId = match.id || match.title;
  const key = getJobFeedbackKey(jobId);
  const checked = selectedJobs.has(key) ? "checked" : "";
  return `
    <label class="select-job-control">
      <input
        type="checkbox"
        data-select-job="${escapeHtml(jobId)}"
        data-job-title="${escapeHtml(match.title)}"
        data-job-source="${escapeHtml(match.source || "")}"
        data-job-order="${index + 1}"
        ${checked}
      />
      加入复制清单
    </label>
  `;
}

function refreshSelectedJobsFromRanked(ranked) {
  ranked.forEach((job, index) => {
    const key = getJobFeedbackKey(job.id || job.title);
    if (!selectedJobs.has(key)) return;
    const current = selectedJobs.get(key);
    selectedJobs.set(key, {
      title: job.title,
      source: job.source || "",
      order: index + 1,
      selectedAt: current.selectedAt
    });
  });
}

function toggleSelectedJob(checkbox) {
  const key = getJobFeedbackKey(checkbox.dataset.selectJob);
  if (checkbox.checked) {
    selectedJobs.set(key, {
      title: checkbox.dataset.jobTitle || "",
      source: checkbox.dataset.jobSource || "",
      order: Number(checkbox.dataset.jobOrder || 999),
      selectedAt: Date.now()
    });
  } else {
    selectedJobs.delete(key);
  }
  updateSelectedJobTools();
}

function getSelectedJobsInOrder() {
  return [...selectedJobs.values()].sort((a, b) => a.selectedAt - b.selectedAt);
}

function updateSelectedJobTools() {
  if (!selectedJobTools) return;
  const selected = getSelectedJobsInOrder();
  selectedJobTools.hidden = selected.length === 0;
  selectedJobCount.textContent = `已选择 ${selected.length} 个岗位`;
  selectedCopyStatus.textContent = "";
}

async function copySelectedJobs() {
  const selected = getSelectedJobsInOrder();
  if (!selected.length) return;

  const text = selected
    .map((job, index) => `${index + 1}. ${job.title}\n${job.source}`)
    .join("\n\n");
  await copyText(text);
  selectedCopyStatus.textContent = `已复制 ${selected.length} 个岗位链接`;
}

function clearSelectedJobs() {
  selectedJobs.clear();
  results.querySelectorAll("[data-select-job]").forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateSelectedJobTools();
}

function renderFeedbackTools(jobId, feedbackSignal = {}) {
  const safeJobId = escapeHtml(jobId);
  const preference = feedbackSignal.preference || "";
  const statusText = preference ? "已参考反馈排序" : "";
  return `
    <div class="feedback-box" data-feedback-job="${safeJobId}">
      <span>人工反馈</span>
      <button class="feedback-button ${preference === "fit" ? "active" : ""}" type="button" data-feedback-value="fit">合适</button>
      <button class="feedback-button ${preference === "unfit" ? "active" : ""}" type="button" data-feedback-value="unfit">不合适</button>
      <em class="feedback-status" aria-live="polite">${escapeHtml(statusText)}</em>
    </div>
  `;
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let insideQuote = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      insideQuote = !insideQuote;
    } else if (char === "," && !insideQuote) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]).map((item) => normalize(item));
  const rows = lines.slice(1).map(parseCsvLine);

  return rows
    .map((row) => {
      const record = {};
      headers.forEach((header, index) => {
        record[header] = row[index] || "";
      });

      const title = record["岗位名称"] || record["title"] || record["岗位"] || "";
      const department = record["部门"] || record["department"] || "未填写部门";
      const location = record["地点"] || record["location"] || "未填写地点";
      const description = record["jd"] || record["岗位描述"] || record["description"] || "";
      const requiredText = record["必备要求"] || record["requirements"] || description;
      const bonusText = record["加分项"] || record["bonus"] || "";

      return {
        title,
        department,
        location,
        description,
        requirementsText: requiredText,
        required: splitKeywords(requiredText),
        bonus: splitKeywords(bonusText),
        source: record["来源链接"] || record["source"] || ""
      };
    })
    .filter((job) => job.title);
}

function splitKeywords(text) {
  return normalize(text)
    .split(/[,，、;；\n/]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 1)
    .slice(0, 18);
}

function splitLocation(location) {
  return String(location || "")
    .split(/[、,，/]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function findResearchHits(job, researchText) {
  const terms = extractResearchTerms(researchText);
  if (!terms.length) return [];

  const title = normalize(job.title);
  const body = normalize([job.description, job.requirementsText, job.department].join(" "));
  const keywords = normalize([...(job.required || []), ...(job.bonus || [])].join(" "));

  return terms
    .map((term) => {
      const normalizedTerm = normalize(term);
      if (!normalizedTerm) return null;
      if (title.includes(normalizedTerm)) return { term, weight: 22 };
      if (keywords.includes(normalizedTerm)) return { term, weight: 18 };
      if (body.includes(normalizedTerm)) return { term, weight: 12 };
      return null;
    })
    .filter(Boolean)
    .slice(0, 8);
}

function extractResearchTerms(text) {
  const rawTerms = normalize(text)
    .split(/[\s,，、;；\n/|]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 1);

  const expanded = [];
  rawTerms.forEach((term) => {
    expanded.push(term);
    if (/[\u4e00-\u9fa5]/.test(term) && term.length >= 5) {
      const maxLength = Math.min(6, term.length);
      for (let size = 2; size <= maxLength; size += 1) {
        for (let index = 0; index <= term.length - size; index += 1) {
          expanded.push(term.slice(index, index + size));
        }
      }
    }
    if (term.includes("大模型")) expanded.push("llm");
    if (term.includes("智能体")) expanded.push("agent");
  });

  return dedupe(expanded).slice(0, 24);
}

function dedupe(items) {
  return [...new Set(items.filter(Boolean))];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

modeTabs.forEach((tab) => {
  tab.addEventListener("click", () => setSourceMode(tab.dataset.sourceMode));
});

matchButton.addEventListener("click", renderMatches);

researchField.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  renderMatches();
});

jobSearch.addEventListener("input", renderJobs);

importJobButton.addEventListener("click", (event) => {
  if (ownerMode) return;
  event.preventDefault();
  statusLabel.textContent = "仅平台所有者可导入岗位";
});

results.addEventListener("click", async (event) => {
  const feedbackButton = event.target.closest("[data-feedback-value]");
  if (feedbackButton) {
    recordFeedback(feedbackButton);
    return;
  }

  const button = event.target.closest("[data-copy-link]");
  if (!button) return;

  const link = button.dataset.copyLink;
  await copyText(link);
  button.textContent = "已复制";
  window.setTimeout(() => {
    button.textContent = "复制链接";
  }, 1400);
});

results.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-select-job]");
  if (!checkbox) return;
  toggleSelectedJob(checkbox);
});

copySelectedJobsButton.addEventListener("click", copySelectedJobs);

clearSelectedJobsButton.addEventListener("click", clearSelectedJobs);

function recordFeedback(button) {
  const feedbackBox = button.closest("[data-feedback-job]");
  const value = button.dataset.feedbackValue;
  const jobKey = getJobFeedbackKey(feedbackBox.dataset.feedbackJob);
  const job = jobs.find((item) => getJobFeedbackKey(item) === jobKey);
  const buttons = [...feedbackBox.querySelectorAll("[data-feedback-value]")];
  buttons.forEach((item) => {
    item.classList.toggle("active", item === button);
  });

  if (job) {
    const candidateProfile = parseCandidateProfile(getCandidatePayload());
    const terms = getFeedbackTerms(job, candidateProfile);
    const store = loadFeedbackStore();
    const record = store[jobKey] || { fit: 0, unfit: 0, terms: {}, updatedAt: "" };
    record.terms = record.terms || {};
    record[value] = Number(record[value] || 0) + 1;
    terms.forEach((term) => {
      record.terms[term] = record.terms[term] || { fit: 0, unfit: 0 };
      record.terms[term][value] = Number(record.terms[term][value] || 0) + 1;
    });
    record.updatedAt = new Date().toISOString();
    store[jobKey] = record;
    saveFeedbackStore(store);
  }

  const status = feedbackBox.querySelector(".feedback-status");
  status.textContent = value === "fit" ? "已记录：合适，后续会更靠前" : "已记录：不合适，后续会降权";

  window.setTimeout(renderMatches, 450);
}

jobFile.addEventListener("change", async (event) => {
  if (!ownerMode) {
    event.target.value = "";
    statusLabel.textContent = "仅平台所有者可导入岗位";
    return;
  }

  const [file] = event.target.files;
  if (!file) return;

  const text = await file.text();
  const imported = parseCsv(text);

  if (!imported.length) {
    statusLabel.textContent = "CSV 未识别";
    return;
  }

  jobs = imported.map(enrichJobProfile);
  renderJobs();
  renderFilters();
  statusLabel.textContent = "岗位库已更新";
  renderMatches();
});

commentSubmit.addEventListener("click", addComment);

contactButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleContactPanel(button.dataset.contactTarget);
  });
});

contactPanels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.addEventListener("click", () => {
  closeContactPanels();
});

document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  await copyText(button.dataset.copyEmail);
  button.textContent = "邮箱已复制";
  window.setTimeout(() => {
    button.textContent = button.dataset.copyEmail;
  }, 1400);
});

function toggleContactPanel(target) {
  contactPanels.forEach((panel) => {
    const isTarget = panel.dataset.contactPanel === target;
    panel.hidden = isTarget ? !panel.hidden : true;
  });
}

function closeContactPanels() {
  contactPanels.forEach((panel) => {
    panel.hidden = true;
  });
}

function addComment() {
  const content = commentText.value.trim();
  if (!content) {
    commentStatus.textContent = "请先填写评论内容。";
    return;
  }

  const comments = readComments();
  comments.unshift({
    name: commentName.value.trim() || "游客",
    content,
    time: new Date().toLocaleString("zh-CN", { hour12: false })
  });
  saveComments(comments.slice(0, 50));
  commentText.value = "";
  commentStatus.textContent = "评论已发布。";
  renderComments();
}

function renderComments() {
  const comments = readComments();
  if (!comments.length) {
    commentList.classList.add("empty-state");
    commentList.innerHTML = "暂无评论，欢迎留下第一条反馈。";
    return;
  }

  commentList.classList.remove("empty-state");
  commentList.innerHTML = comments
    .map(
      (comment) => `
        <article class="comment-item">
          <div class="comment-meta">
            <strong>${escapeHtml(comment.name)}</strong>
            <span>${escapeHtml(comment.time)}</span>
          </div>
          <p>${escapeHtml(comment.content)}</p>
        </article>
      `
    )
    .join("");
}

function readComments() {
  try {
    return JSON.parse(localStorage.getItem(commentStorageKey) || "[]");
  } catch {
    return [];
  }
}

function saveComments(comments) {
  try {
    localStorage.setItem(commentStorageKey, JSON.stringify(comments));
  } catch {
    commentStatus.textContent = "当前浏览器暂时无法保存评论。";
  }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

syncOwnerControls();
renderJobs();
renderFilters();
setSourceMode(activeSourceMode);
renderComments();
