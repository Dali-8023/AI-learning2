// 吴恩达《Generative AI for Everyone》课程完整数据
const courseData = {
    // 课程元数据
    meta: {
        title: "吴恩达《Generative AI for Everyone》",
        subtitle: "从零基础到实战应用，全面掌握生成式AI",
        author: "Andrew Ng (吴恩达)",
        duration: "4周",
        level: "初学者",
        lastUpdated: "2023年11月"
    },
    
    // 所有模块数据
    modules: {
        // 模块1：基础概念
        1: {
            id: 1,
            title: "什么是生成式AI？",
            subtitle: "从零理解生成式AI的核心概念",
            week: 1,
            duration: "2小时",
            icon: "fas fa-lightbulb",
            color: "#4A6FA5",
            
            // 学习目标
            objectives: [
                "理解生成式AI与传统AI的根本区别",
                "掌握生成式AI的核心概念和术语",
                "了解生成式AI的历史发展和现状",
                "能够识别生成式AI的典型应用场景"
            ],
            
            // 主要内容章节
            sections: [
                {
                    id: "1.1",
                    title: "生成式AI的核心概念",
                    content: `
                        <h5>传统AI vs 生成式AI</h5>
                        <p>生成式AI与传统AI（判别式AI）有本质区别。传统AI主要进行<strong>分类、识别和预测</strong>任务，而生成式AI的核心是<strong>创造新内容</strong>。</p>
                        
                        <div class="comparison-grid">
                            <div class="comparison-item">
                                <h6><i class="fas fa-filter"></i> 传统AI（判别式AI）</h6>
                                <ul>
                                    <li><strong>功能：</strong>分类、识别、预测</li>
                                    <li><strong>工作方式：</strong>从数据中学习模式，然后对新的输入进行分类</li>
                                    <li><strong>典型应用：</strong>垃圾邮件检测、图像分类、语音识别</li>
                                    <li><strong>输出：</strong>标签、类别、概率</li>
                                    <li><strong>例子：</strong>识别照片中的猫</li>
                                </ul>
                            </div>
                            <div class="comparison-item">
                                <h6><i class="fas fa-magic"></i> 生成式AI</h6>
                                <ul>
                                    <li><strong>功能：</strong>创造、生成、合成</li>
                                    <li><strong>工作方式：</strong>学习数据的分布，然后生成新的、类似的数据</li>
                                    <li><strong>典型应用：</strong>文本生成、图像创作、音乐合成</li>
                                    <li><strong>输出：</strong>新内容（文本、图像、代码等）</li>
                                    <li><strong>例子：</strong>生成一张全新的猫的照片</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="analogy-box">
                            <h6><i class="fas fa-brain"></i> 简单比喻</h6>
                            <p>想象一下两种不同的厨师：</p>
                            <ul>
                                <li><strong>传统AI厨师：</strong>品尝一道菜，告诉你这是什么菜系、用了什么调料（分类）</li>
                                <li><strong>生成式AI厨师：</strong>品尝很多菜后，创造出全新的、从未有过的菜品（创造）</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: "1.2",
                    title: "生成式AI的技术演进",
                    content: `
                        <h5>发展时间线</h5>
                        <p>生成式AI并非一夜之间出现的，它经历了数十年的发展：</p>
                        
                        <div class="timeline-simple">
                            <div class="timeline-item">
                                <div class="timeline-date">2014年</div>
                                <div class="timeline-content">
                                    <h6>生成对抗网络(GANs)诞生</h6>
                                    <p>Ian Goodfellow提出GANs，两个神经网络相互竞争，一个生成内容，一个判断真伪</p>
                                    <span class="tech-tag">图像生成</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">2017年</div>
                                <div class="timeline-content">
                                    <h6>Transformer架构提出</h6>
                                    <p>Google提出Transformer架构，为现代大语言模型奠定基础</p>
                                    <span class="tech-tag">自然语言处理</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">2018年</div>
                                <div class="timeline-content">
                                    <h6>GPT-1发布</h6>
                                    <p>OpenAI发布第一个GPT模型，参数1.17亿</p>
                                    <span class="tech-tag">语言模型</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">2020年</div>
                                <div class="timeline-content">
                                    <h6>GPT-3发布</h6>
                                    <p>参数达1750亿，展示出惊人的few-shot学习能力</p>
                                    <span class="tech-tag">突破性进展</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">2022年</div>
                                <div class="timeline-content">
                                    <h6>ChatGPT发布</h6>
                                    <p>引发全球AI热潮，让生成式AI进入大众视野</p>
                                    <span class="tech-tag">应用爆发</span>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    id: "1.3",
                    title: "关键术语解析",
                    content: `
                        <h5>必须掌握的核心概念</h5>
                        
                        <div class="terms-grid">
                            <div class="term-item">
                                <h6>大语言模型(LLM)</h6>
                                <p>基于海量文本数据训练的大型神经网络模型，能够理解和生成人类语言</p>
                                <div class="term-example">
                                    <strong>例子：</strong>GPT-4, Claude, LLaMA
                                </div>
                            </div>
                            <div class="term-item">
                                <h6>参数(Parameters)</h6>
                                <p>模型中可调整的数值，决定了模型的行为和性能。参数越多，模型通常越"聪明"</p>
                                <div class="term-example">
                                    <strong>类比：</strong>人类大脑的神经连接数量
                                </div>
                            </div>
                            <div class="term-item">
                                <h6>提示(Prompt)</h6>
                                <p>用户输入给AI的指令或问题，引导AI生成特定内容</p>
                                <div class="term-example">
                                    <strong>例子：</strong>"写一首关于春天的诗"
                                </div>
                            </div>
                            <div class="term-item">
                                <h6>生成(Generation)</h6>
                                <p>AI根据输入创建新内容的过程</p>
                                <div class="term-example">
                                    <strong>过程：</strong>输入→AI处理→新内容输出
                                </div>
                            </div>
                            <div class="term-item">
                                <h6>幻觉(Hallucination)</h6>
                                <p>AI生成看似合理但事实上错误或虚构的内容</p>
                                <div class="term-example">
                                    <strong>例子：</strong>AI编造不存在的书籍引用
                                </div>
                            </div>
                            <div class="term-item">
                                <h6>微调(Fine-tuning)</h6>
                                <p>在预训练模型基础上，用特定数据进一步训练，使其适应特定任务</p>
                                <div class="term-example">
                                    <strong>例子：</strong>将通用模型微调为法律专用模型
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    id: "1.4",
                    title: "生成式AI的应用场景",
                    content: `
                        <h5>文本生成应用</h5>
                        <ul>
                            <li><strong>创意写作：</strong>小说、诗歌、剧本创作</li>
                            <li><strong>商务写作：</strong>邮件、报告、营销文案</li>
                            <li><strong>内容创作：</strong>博客文章、社交媒体内容</li>
                            <li><strong>翻译与总结：</strong>文档翻译、文章摘要</li>
                            <li><strong>教育辅助：</strong>生成练习题、解释复杂概念</li>
                        </ul>
                        
                        <h5>图像生成应用</h5>
                        <ul>
                            <li><strong>艺术创作：</strong>数字绘画、概念艺术</li>
                            <li><strong>设计辅助：</strong>Logo设计、UI界面、海报</li>
                            <li><strong>照片编辑：</strong>背景替换、风格转换、修复</li>
                            <li><strong>3D建模：</strong>3D模型生成、纹理创建</li>
                            <li><strong>产品设计：</strong>原型可视化、包装设计</li>
                        </ul>
                        
                        <h5>代码生成应用</h5>
                        <ul>
                            <li><strong>编程辅助：</strong>代码补全、bug修复、重构</li>
                            <li><strong>算法实现：</strong>根据描述生成代码</li>
                            <li><strong>代码转换：</strong>Python转JavaScript等</li>
                            <li><strong>文档生成：</strong>根据代码生成说明文档</li>
                            <li><strong>测试生成：</strong>自动生成测试用例</li>
                        </ul>
                        
                        <h5>多媒体创作</h5>
                        <ul>
                            <li><strong>音乐生成：</strong>旋律创作、和声生成、编曲</li>
                            <li><strong>语音合成：</strong>文本转语音、语音克隆</li>
                            <li><strong>视频生成：</strong>短视频创建、特效添加</li>
                            <li><strong>游戏开发：</strong>游戏关卡、角色设计、剧情</li>
                        </ul>
                    `
                }
            ],
            
            // 实践练习
            practices: [
                {
                    id: "p1-1",
                    title: "区分生成式AI与传统AI",
                    content: `
                        <p>判断以下场景属于生成式AI还是传统AI：</p>
                        <ol>
                            <li>识别照片中的人脸是谁</li>
                            <li>根据关键词生成一张风景画</li>
                            <li>预测明天的股票价格</li>
                            <li>写一篇关于AI的科普文章</li>
                            <li>将中文翻译成英文</li>
                            <li>根据用户历史推荐电影</li>
                        </ol>
                        <button class="btn btn-sm btn-outline" onclick="showAnswer('p1-1')">查看答案</button>
                        <div class="answer" id="answer-p1-1" style="display: none; margin-top: 1rem;">
                            <p><strong>答案：</strong></p>
                            <ol>
                                <li>传统AI（识别）</li>
                                <li>生成式AI（创造图像）</li>
                                <li>传统AI（预测）</li>
                                <li>生成式AI（创造文本）</li>
                                <li>生成式AI（虽然翻译也可视为转换，但现代翻译模型是生成式的）</li>
                                <li>传统AI（推荐系统）</li>
                            </ol>
                        </div>
                    `
                },
                {
                    id: "p1-2",
                    title: "体验生成式AI",
                    content: `
                        <p>选择一个生成式AI工具（如ChatGPT），尝试以下任务：</p>
                        <ol>
                            <li>让它介绍自己是什么</li>
                            <li>生成一个关于"人工智能未来"的短段落</li>
                            <li>写一首五行打油诗</li>
                            <li>创建一个简单的Python函数来计算斐波那契数列</li>
                        </ol>
                        <p><strong>思考：</strong>观察AI的生成过程，它是否有"思考"的痕迹？输出的质量如何？</p>
                    `
                }
            ],
            
            // 关键要点
            takeaways: [
                "生成式AI的核心是'创造'而非'识别'",
                "大语言模型(LLM)是当前生成式AI的主要形式",
                "生成式AI已应用于文本、图像、代码、音乐等多个领域",
                "AI的'智能'来自于海量数据和复杂的模型参数",
                "理解AI的能力边界同样重要"
            ],
            
            // 进一步学习资源
            resources: [
                {
                    type: "视频",
                    title: "吴恩达课程视频：模块1",
                    url: "#"
                },
                {
                    type: "文章",
                    title: "什么是生成式AI？完整指南",
                    url: "#"
                },
                {
                    type: "工具",
                    title: "AI工具尝试：ChatGPT",
                    url: "https://chat.openai.com"
                }
            ]
        },
        
        // 模块2：大语言模型深度解析
        2: {
            id: 2,
            title: "大语言模型(LLM)深度解析",
            subtitle: "理解现代AI的核心技术",
            week: 1,
            duration: "3小时",
            icon: "fas fa-comments",
            color: "#166088",
            
            objectives: [
                "深入理解LLM的工作原理",
                "掌握LLM的核心技术概念",
                "了解主流LLM的特点和差异",
                "能够评估不同LLM的适用场景"
            ],
            
            sections: [
                {
                    id: "2.1",
                    title: "LLM到底是什么？",
                    content: `
                        <h5>核心本质：概率文本生成机</h5>
                        <p>大语言模型的本质是一个<strong>基于概率的文本生成系统</strong>。它通过分析海量文本数据，学习语言中的统计规律，然后根据给定的文本预测下一个最可能出现的词。</p>
                        
                        <div class="analogy-box">
                            <h6><i class="fas fa-gamepad"></i> 文字接龙游戏</h6>
                            <p>想象你在玩文字接龙游戏：</p>
                            <ul>
                                <li>给定："今天天气真..."</li>
                                <li>你会想到："好"、"不错"、"晴朗"等词</li>
                                <li>你选择哪个词取决于你以前听过的类似表达</li>
                                <li>LLM做的是类似的事情，只是规模更大、更复杂</li>
                            </ul>
                        </div>
                        
                        <div class="code-example">
                            <h6><i class="fas fa-code"></i> 简化工作流程</h6>
                            <pre><code class="language-python"># LLM的简化工作流程
def predict_next_word(context):
    # 1. 将输入文本转换为数字表示（词嵌入）
    embeddings = convert_to_embeddings(context)
    
    # 2. 通过神经网络层处理
    hidden_states = process_through_layers(embeddings)
    
    # 3. 计算下一个词的概率分布
    probabilities = calculate_probabilities(hidden_states)
    
    # 4. 选择概率最高的词（或按概率采样）
    next_word = select_word(probabilities)
    
    return next_word</code></pre>
                        </div>
                        
                        <h5>从下一个词预测到完整生成</h5>
                        <p>LLM通过反复预测"下一个词"来生成完整文本：</p>
                        <ol>
                            <li>输入提示："今天天气"</li>
                            <li>模型预测下一个词："真"（概率最高）</li>
                            <li>输入变为："今天天气真"</li>
                            <li>模型预测下一个词："好"（概率最高）</li>
                            <li>重复直到生成完整回答</li>
                        </ol>
                    `
                },
                {
                    id: "2.2",
                    title: "LLM的关键组件",
                    content: `
                        <h5>四大核心组件</h5>
                        
                        <div class="components-grid">
                            <div class="component-item">
                                <div class="component-icon">
                                    <i class="fas fa-database"></i>
                                </div>
                                <h6>训练数据</h6>
                                <ul>
                                    <li><strong>作用：</strong>模型的"知识库"</li>
                                    <li><strong>规模：</strong>通常是TB级别的文本数据</li>
                                    <li><strong>来源：</strong>网页、书籍、论文、代码等</li>
                                    <li><strong>质量：</strong>数据质量决定模型质量</li>
                                </ul>
                            </div>
                            <div class="component-item">
                                <div class="component-icon">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <h6>模型参数</h6>
                                <ul>
                                    <li><strong>作用：</strong>存储学习到的模式</li>
                                    <li><strong>规模：</strong>从数百万到上万亿</li>
                                    <li><strong>类型：</strong>权重和偏置</li>
                                    <li><strong>功能：</strong>决定输入如何转换为输出</li>
                                </ul>
                            </div>
                            <div class="component-item">
                                <div class="component-icon">
                                    <i class="fas fa-project-diagram"></i>
                                </div>
                                <h6>神经网络架构</h6>
                                <ul>
                                    <li><strong>类型：</strong>Transformer架构</li>
                                    <li><strong>层数：</strong>数十到数百层</li>
                                    <li><strong>功能：</strong>处理和转换输入信息</li>
                                    <li><strong>创新：</strong>注意力机制是关键</li>
                                </ul>
                            </div>
                            <div class="component-item">
                                <div class="component-icon">
                                    <i class="fas fa-sliders-h"></i>
                                </div>
                                <h6>训练算法</h6>
                                <ul>
                                    <li><strong>方法：</strong>自监督学习</li>
                                    <li><strong>任务：</strong>预测被遮盖的词</li>
                                    <li><strong>优化：</strong>梯度下降和反向传播</li>
                                    <li><strong>目标：</strong>最小化预测错误</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h5>参数规模的意义</h5>
                        <table class="parameter-table">
                            <thead>
                                <tr>
                                    <th>模型</th>
                                    <th>参数量</th>
                                    <th>意义</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>小型模型</td>
                                    <td>1亿以下</td>
                                    <td>适合简单任务，可在手机运行</td>
                                </tr>
                                <tr>
                                    <td>中型模型</td>
                                    <td>1-100亿</td>
                                    <td>通用任务，需服务器运行</td>
                                </tr>
                                <tr>
                                    <td>大型模型</td>
                                    <td>100-1000亿</td>
                                    <td>复杂推理，需要大量计算资源</td>
                                </tr>
                                <tr>
                                    <td>超大型模型</td>
                                    <td>1000亿以上</td>
                                    <td>前沿研究，需要超级计算机</td>
                                </tr>
                            </tbody>
                        </table>
                    `
                },
                {
                    id: "2.3",
                    title: "LLM的能力层次",
                    content: `
                        <h5>四个能力层级</h5>
                        
                        <div class="capability-levels">
                            <div class="level-item">
                                <div class="level-header">
                                    <span class="level-number">1</span>
                                    <h6>基本语言理解</h6>
                                </div>
                                <div class="level-content">
                                    <ul>
                                        <li><strong>语法理解：</strong>识别句子结构</li>
                                        <li><strong>词汇理解：</strong>知道单词的含义和用法</li>
                                        <li><strong>基本语义：</strong>理解简单句子的意思</li>
                                        <li><strong>例子：</strong>理解"猫在椅子上"的意思</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="level-item">
                                <div class="level-header">
                                    <span class="level-number">2</span>
                                    <h6>上下文理解</h6>
                                </div>
                                <div class="level-content">
                                    <ul>
                                        <li><strong>指代消解：</strong>理解代词指代的对象</li>
                                        <li><strong>多轮对话：</strong>记住对话历史</li>
                                        <li><strong>隐含意义：</strong>理解言外之意</li>
                                        <li><strong>例子：</strong>理解"它饿了"中的"它"指什么</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="level-item">
                                <div class="level-header">
                                    <span class="level-number">3</span>
                                    <h6>推理与创造</h6>
                                </div>
                                <div class="level-content">
                                    <ul>
                                        <li><strong>逻辑推理：</strong>进行简单逻辑推断</li>
                                        <li><strong>知识应用：</strong>应用学到的知识解决问题</li>
                                        <li><strong>内容创作：</strong>生成原创内容</li>
                                        <li><strong>例子：</strong>根据要求写一个故事</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="level-item">
                                <div class="level-header">
                                    <span class="level-number">4</span>
                                    <h6>复杂任务处理</h6>
                                </div>
                                <div class="level-content">
                                    <ul>
                                        <li><strong>多步骤推理：</strong>解决需要多步思考的问题</li>
                                        <li><strong>代码生成：</strong>编写和调试代码</li>
                                        <li><strong>复杂分析：</strong>分析复杂数据并得出结论</li>
                                        <li><strong>例子：</strong>分析财务报表并给出建议</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    id: "2.4",
                    title: "主流LLM对比",
                    content: `
                        <h5>主流模型特性比较</h5>
                        
                        <table class="model-comparison">
                            <thead>
                                <tr>
                                    <th>模型</th>
                                    <th>开发公司</th>
                                    <th>参数量</th>
                                    <th>主要特点</th>
                                    <th>擅长领域</th>
                                    <th>访问方式</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>GPT-4</strong></td>
                                    <td>OpenAI</td>
                                    <td>~1.7万亿</td>
                                    <td>多模态、推理能力强、上下文长</td>
                                    <td>复杂推理、创意写作、代码</td>
                                    <td>API、ChatGPT Plus</td>
                                </tr>
                                <tr>
                                    <td><strong>Claude 3</strong></td>
                                    <td>Anthropic</td>
                                    <td>未公开</td>
                                    <td>安全性高、长上下文、诚实</td>
                                    <td>长文档处理、合规内容、分析</td>
                                    <td>API、Claude.ai</td>
                                </tr>
                                <tr>
                                    <td><strong>Gemini Pro</strong></td>
                                    <td>Google</td>
                                    <td>未公开</td>
                                    <td>原生多模态、集成搜索、多语言</td>
                                    <td>多语言、多任务、研究</td>
                                    <td>API、Bard</td>
                                </tr>
                                <tr>
                                    <td><strong>LLaMA 2</strong></td>
                                    <td>Meta</td>
                                    <td>7B/13B/70B</td>
                                    <td>开源、可商用、可本地部署</td>
                                    <td>研究、本地应用、定制开发</td>
                                    <td>开源下载</td>
                                </tr>
                                <tr>
                                    <td><strong>文心一言</strong></td>
                                    <td>百度</td>
                                    <td>未公开</td>
                                    <td>中文优化、本土知识、多模态</td>
                                    <td>中文内容、本地化应用</td>
                                    <td>yiyan.baidu.com</td>
                                </tr>
                                <tr>
                                    <td><strong>通义千问</strong></td>
                                    <td>阿里巴巴</td>
                                    <td>未公开</td>
                                    <td>中文优化、代码能力强</td>
                                    <td>中文对话、代码生成</td>
                                    <td>tongyi.aliyun.com</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div class="note-box">
                            <h6><i class="fas fa-exclamation-circle"></i> 选择建议</h6>
                            <ul>
                                <li><strong>初学者：</strong>从ChatGPT或Claude开始，界面友好</li>
                                <li><strong>中文用户：</strong>文心一言、通义千问对中文支持更好</li>
                                <li><strong>开发者：</strong>考虑API成本、文档完整性和功能</li>
                                <li><strong>研究/定制：</strong>开源模型如LLaMA更适合</li>
                            </ul>
                        </div>
                    `
                }
            ],
            
            practices: [
                {
                    id: "p2-1",
                    title: "对比不同LLM的回答",
                    content: `
                        <p>用相同的提示测试不同的AI模型，比较它们的回答：</p>
                        
                        <div class="prompt-test">
                            <p><strong>测试提示：</strong>"请用简单的语言解释什么是大语言模型，就像向10岁孩子解释一样。请用不超过100字回答。"</p>
                            
                            <div class="model-responses">
                                <div class="response-item">
                                    <h6>ChatGPT回答：</h6>
                                    <div class="response-content">
                                        <p>想象一下，大语言模型就像一个读过很多很多书的大脑。它通过学习书本里的知识，学会如何说话和写作。当你问它问题时，它会根据学过的知识，一个字一个字地"想"出答案，就像你在玩文字接龙游戏一样。</p>
                                    </div>
                                </div>
                                
                                <div class="response-item">
                                    <h6>Claude回答：</h6>
                                    <div class="response-content">
                                        <p>大语言模型就像一个超级会说话的朋友，它读过世界上很多书和文章。当你问它问题时，它会回忆读过的内容，然后把这些知识重新组合，用通顺的话回答你。它不能真的"思考"，但能写出很像人类的文字。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p><strong>分析任务：</strong></p>
                        <ol>
                            <li>两个回答有什么不同？</li>
                            <li>哪个解释更容易理解？</li>
                            <li>它们都准确吗？有什么遗漏？</li>
                        </ol>
                    `
                },
                {
                    id: "p2-2",
                    title: "测试AI的知识边界",
                    content: `
                        <p>尝试问AI一些它可能不知道或会出错的问题：</p>
                        <ul>
                            <li>"告诉我明天北京的天气"（AI没有实时信息）</li>
                            <li>"1+1等于多少？请详细解释计算过程"（简单问题看AI如何过度解释）</li>
                            <li>"给我推荐一本2024年出版的好书"（AI不知道未来）</li>
                            <li>"写一首关于[你家乡]的诗，包含当地特色"</li>
                        </ul>
                        
                        <p><strong>观察：</strong></p>
                        <ul>
                            <li>AI是否承认不知道？</li>
                            <li>它会编造信息吗？</li>
                            <li>回答的自信程度如何？</li>
                        </ul>
                    `
                }
            ],
            
            takeaways: [
                "LLM的本质是基于概率的文本生成机",
                "参数数量不是唯一的衡量标准，架构和数据质量同样重要",
                "不同LLM有不同特点和适用场景",
                "理解AI的局限性比相信它的能力更重要",
                "实践是理解LLM工作原理的最佳方式"
            ],
            
            resources: [
                {
                    type: "视频",
                    title: "吴恩达讲解LLM工作原理",
                    url: "#"
                },
                {
                    type: "文章",
                    title: "Transformer架构详解",
                    url: "#"
                },
                {
                    type: "工具",
                    title: "Hugging Face模型库",
                    url: "https://huggingface.co"
                }
            ]
        },
        
        // 模块3：提示工程（简略示例）
        3: {
            id: 3,
            title: "提示工程(Prompt Engineering)",
            subtitle: "与AI有效沟通的艺术",
            week: 1,
            duration: "2.5小时",
            icon: "fas fa-keyboard",
            color: "#2E8B57",
            
            objectives: [
                "掌握提示工程的基本原理",
                "学会设计有效的提示结构",
                "了解不同提示技巧的应用场景",
                "能够优化提示以获得更好结果"
            ],
            
            sections: [
                {
                    id: "3.1",
                    title: "什么是提示工程？",
                    content: `
                        <h5>定义与重要性</h5>
                        <p>提示工程是与AI有效沟通的艺术和科学。好的提示能让AI生成更准确、有用、符合预期的结果。</p>
                        
                        <div class="comparison-example">
                            <div class="example-bad">
                                <h6><i class="fas fa-times-circle"></i> 差提示</h6>
                                <p>"写首诗"</p>
                                <div class="example-result">
                                    <p><strong>结果：</strong>AI可能生成平庸、无针对性的内容</p>
                                </div>
                            </div>
                            <div class="example-good">
                                <h6><i class="fas fa-check-circle"></i> 好提示</h6>
                                <p>"请以'春天的早晨'为主题，写一首四行中文诗，每行7个字，押韵格式为AABA，表达希望与新生的情感。"</p>
                                <div class="example-result">
                                    <p><strong>结果：</strong>AI会生成符合要求、有深度的作品</p>
                                </div>
                            </div>
                        </div>
                    `
                }
            ],
            
            practices: [],
            takeaways: [],
            resources: []
        }
    },
    
    // 学习周历数据
    weeklyPlans: {
        1: {
            week: 1,
            title: "建立感性认识与基础概念",
            theme: "理解生成式AI是什么，体验AI的能力",
            days: {
                "周一": {
                    morning: {
                        title: "课程介绍与AI初体验",
                        tasks: [
                            "观看吴恩达课程视频1-2",
                            "注册ChatGPT/Claude账号",
                            "完成'AI对话实验'任务"
                        ]
                    },
                    afternoon: {
                        title: "生成式AI基础",
                        tasks: [
                            "学习什么是生成式AI",
                            "与传统AI的区别",
                            "实际应用场景分析"
                        ]
                    }
                },
                "周二": {
                    morning: {
                        title: "大语言模型深度解析",
                        tasks: [
                            "LLM的工作原理",
                            "参数与训练数据",
                            "主流模型对比"
                        ]
                    },
                    afternoon: {
                        title: "AI能力边界",
                        tasks: [
                            "AI的强项与弱项",
                            "'幻觉'现象分析",
                            "可信度评估"
                        ]
                    }
                },
                "周三": {
                    morning: {
                        title: "提示工程基础",
                        tasks: [
                            "什么是提示工程",
                            "基础提示技巧",
                            "角色扮演提示"
                        ]
                    },
                    afternoon: {
                        title: "结构化提示练习",
                        tasks: [
                            "5个结构化提示设计",
                            "效果对比分析",
                            "常见错误避免"
                        ]
                    }
                },
                "周四": {
                    morning: {
                        title: "AI伦理与责任",
                        tasks: [
                            "AI的潜在风险",
                            "偏见与公平性",
                            "使用伦理指南"
                        ]
                    },
                    afternoon: {
                        title: "实践项目1",
                        tasks: [
                            "选择个人应用场景",
                            "设计AI辅助方案",
                            "原型测试与反馈"
                        ]
                    }
                },
                "周五": {
                    fullDay: {
                        title: "综合实践与复习",
                        tasks: [
                            "完成周度项目",
                            "记录学习心得",
                            "参与社区讨论",
                            "制定下周学习计划"
                        ]
                    }
                }
            },
            resources: [
                { type: "视频", title: "课程视频：模块1-2", url: "#" },
                { type: "文档", title: "AI基础概念手册", url: "#" },
                { type: "练习", title: "5个提示工程任务", url: "#" },
                { type: "社区", title: "AI初体验分享", url: "#" }
            ]
        },
        2: {
            week: 2,
            title: "理解工作原理与技术基础",
            theme: "深入AI技术原理，理解神经网络与Transformer",
            days: {},
            resources: []
        },
        3: {
            week: 3,
            title: "实际应用与项目开发",
            theme: "将AI应用于实际问题，开发小型AI项目",
            days: {},
            resources: []
        },
        4: {
            week: 4,
            title: "社会影响与未来规划",
            theme: "思考AI的社会影响，制定个人发展计划",
            days: {},
            resources: []
        }
    },
    
    // AI工具数据
    aiTools: {
        all: [
            {
                id: 1,
                name: "ChatGPT",
                company: "OpenAI",
                category: "chat",
                description: "最流行的对话AI，适合初学者练习提示工程",
                features: ["对话交互", "代码生成", "创意写作", "问题解答"],
                pricing: "免费版可用，Plus版$20/月",
                url: "https://chat.openai.com",
                icon: "fas fa-comments",
                color: "#10a37f"
            },
            {
                id: 2,
                name: "Claude",
                company: "Anthropic",
                category: "chat",
                description: "以安全性和长上下文著称的AI助手",
                features: ["长文档处理", "文件上传", "诚实回答", "安全优先"],
                pricing: "免费版可用，Pro版$20/月",
                url: "https://claude.ai",
                icon: "fas fa-user-tie",
                color: "#d4a024"
            },
            {
                id: 3,
                name: "文心一言",
                company: "百度",
                category: "chat",
                description: "百度开发的中文AI，对中文语境理解更佳",
                features: ["中文优化", "多模态", "本土知识", "免费使用"],
                pricing: "免费",
                url: "https://yiyan.baidu.com",
                icon: "fas fa-language",
                color: "#2932e1"
            },
            {
                id: 4,
                name: "Midjourney",
                company: "Midjourney",
                category: "image",
                description: "强大的图像生成AI，通过Discord使用",
                features: ["高质量图像", "艺术风格", "参数控制", "社区活跃"],
                pricing: "$10-120/月",
                url: "https://www.midjourney.com",
                icon: "fas fa-paint-brush",
                color: "#1e1e1e"
            },
            {
                id: 5,
                name: "DALL-E 3",
                company: "OpenAI",
                category: "image",
                description: "集成在ChatGPT中的图像生成模型",
                features: ["文本理解强", "ChatGPT集成", "安全过滤", "易于使用"],
                pricing: "包含在ChatGPT Plus中",
                url: "https://openai.com/dall-e-3",
                icon: "fas fa-palette",
                color: "#10a37f"
            },
            {
                id: 6,
                name: "GitHub Copilot",
                company: "GitHub/Microsoft",
                category: "code",
                description: "AI编程助手，自动补全代码，提高开发效率",
                features: ["代码补全", "多语言支持", "IDE集成", "学习代码库"],
                pricing: "$10/月（个人）",
                url: "https://github.com/features/copilot",
                icon: "fas fa-code",
                color: "#4078c0"
            },
            {
                id: 7,
                name: "Cursor",
                company: "Cursor",
                category: "code",
                description: "基于AI的代码编辑器，理解整个代码库",
                features: ["代码理解", "重构辅助", "bug查找", "文档生成"],
                pricing: "免费版可用，Pro版$20/月",
                url: "https://cursor.sh",
                icon: "fas fa-laptop-code",
                color: "#5865f2"
            },
            {
                id: 8,
                name: "ElevenLabs",
                company: "ElevenLabs",
                category: "audio",
                description: "高质量的语音合成工具，支持多种语言",
                features: ["语音克隆", "多语言", "情感控制", "API可用"],
                pricing: "免费版有限制，$5起/月",
                url: "https://elevenlabs.io",
                icon: "fas fa-volume-up",
                color: "#00b894"
            },
            {
                id: 9,
                name: "Runway ML",
                company: "Runway",
                category: "video",
                description: "AI视频编辑和生成平台",
                features: ["视频生成", "编辑工具", "特效添加", "绿屏移除"],
                pricing: "$15-95/月",
                url: "https://runwayml.com",
                icon: "fas fa-film",
                color: "#000000"
            },
            {
                id: 10,
                name: "Notion AI",
                company: "Notion",
                category: "productivity",
                description: "集成在Notion中的AI助手，提升工作效率",
                features: ["内容总结", "写作辅助", "翻译", "头脑风暴"],
                pricing: "$10/月（附加功能）",
                url: "https://www.notion.so/product/ai",
                icon: "fas fa-sticky-note",
                color: "#ffffff"
            },
            {
                id: 11,
                name: "Gamma",
                company: "Gamma",
                category: "productivity",
                description: "AI驱动的演示文稿和文档生成工具",
                features: ["PPT生成", "文档创建", "设计建议", "快速原型"],
                pricing: "免费版可用，$10起/月",
                url: "https://gamma.app",
                icon: "fas fa-presentation",
                color: "#6c5ce7"
            },
            {
                id: 12,
                name: "Hugging Face",
                company: "Hugging Face",
                category: "development",
                description: "开源AI模型库，包含数千个预训练模型",
                features: ["模型库", "数据集", "Space部署", "社区"],
                pricing: "免费（部分服务收费）",
                url: "https://huggingface.co",
                icon: "fas fa-robot",
                color: "#ffd21e"
            }
        ]
    },
    
    // 提示工程示例
    promptExamples: {
        academic: {
            title: "学术论文摘要",
            prompt: "你是一位学术期刊编辑。请为以下研究论文撰写一个专业的摘要，包含：研究背景、方法、主要发现和意义。摘要长度不超过250字，使用正式学术语言。",
            description: "适用于学术写作，生成结构化的论文摘要",
            useCase: "论文写作、研究总结"
        },
        marketing: {
            title: "产品营销文案",
            prompt: "你是一位资深市场营销专家。请为新款智能手表撰写社交媒体推广文案，突出产品特点：长续航、健康监测、时尚设计。文案要吸引25-35岁年轻专业人士，包含行动号召，使用积极活力的语气。",
            description: "生成吸引目标受众的产品推广内容",
            useCase: "社交媒体营销、产品推广"
        },
        code: {
            title: "代码解释与优化",
            prompt: "你是一位经验丰富的软件工程师。请分析以下Python代码，解释其功能，指出潜在的性能问题，并提供优化建议。代码解释要详细但简洁，优化建议要具体可实施。",
            description: "分析和改进代码，适合学习和代码审查",
            useCase: "代码审查、学习编程"
        },
        learning: {
            title: "学习计划制定",
            prompt: "你是一位教育学专家。请为一名想要学习数据科学的初学者制定一个为期3个月的学习计划。计划应包括：每周学习主题、推荐资源、实践项目和学习目标。以表格形式呈现，内容要具体可行。",
            description: "创建结构化的学习路径",
            useCase: "自学规划、课程设计"
        },
        creative: {
            title: "创意故事生成",
            prompt: "你是一位科幻小说作家。请创作一个关于人工智能获得情感后的短篇故事。故事应包含：引人入胜的开头、冲突发展、情感高潮和开放式结局。故事长度约500字，风格偏向赛博朋克。",
            description: "生成有情节和风格的创意故事",
            useCase: "创意写作、内容创作"
        },
        business: {
            title: "商业计划大纲",
            prompt: "你是一位商业咨询顾问。请为一家计划开设在线教育平台的初创公司制定商业计划大纲。大纲应包括：市场分析、目标客户、产品特点、营销策略、财务预测和风险评估。使用专业商务语言。",
            description: "创建全面的商业计划结构",
            useCase: "创业规划、商业分析"
        }
    },
    
    // 学习资源
    learningResources: {
        documents: [
            { id: 1, title: "完整课程笔记PDF", size: "12MB", url: "#", icon: "fas fa-file-pdf" },
            { id: 2, title: "术语解释手册", size: "5MB", url: "#", icon: "fas fa-book" },
            { id: 3, title: "提示工程速查表", size: "3MB", url: "#", icon: "fas fa-cheat-sheet" },
            { id: 4, title: "AI伦理指南", size: "8MB", url: "#", icon: "fas fa-balance-scale" }
        ],
        videos: [
            { id: 1, title: "吴恩达课程视频全集", duration: "8小时", url: "#", icon: "fas fa-play-circle" },
            { id: 2, title: "技术原理动画演示", duration: "45分钟", url: "#", icon: "fas fa-film" },
            { id: 3, title: "案例实战演示", duration: "2小时", url: "#", icon: "fas fa-laptop-code" },
            { id: 4, title: "专家访谈合集", duration: "3小时", url: "#", icon: "fas fa-microphone" }
        ],
        code: [
            { id: 1, title: "提示模板库", type: "GitHub仓库", url: "#", icon: "fab fa-github" },
            { id: 2, title: "API使用示例", type: "Python代码", url: "#", icon: "fab fa-python" },
            { id: 3, title: "项目模板", type: "完整项目", url: "#", icon: "fas fa-project-diagram" },
            { id: 4, title: "调试工具包", type: "实用脚本", url: "#", icon: "fas fa-tools" }
        ],
        community: [
            { id: 1, title: "学习交流群", platform: "Discord", url: "#", icon: "fab fa-discord" },
            { id: 2, title: "问题解答库", platform: "论坛", url: "#", icon: "fas fa-question-circle" },
            { id: 3, title: "项目展示区", platform: "社区", url: "#", icon: "fas fa-images" },
            { id: 4, title: "导师匹配", platform: "平台", url: "#", icon: "fas fa-user-friends" }
        ]
    }
};

// 用户学习进度数据（初始状态）
const userProgress = {
    completedModules: [1], // 已完成的模块ID
    currentModule: 2, // 当前学习的模块
    weeklyProgress: {
        1: 80, // 第一周完成80%
        2: 45, // 第二周完成45%
        3: 10, // 第三周完成10%
        4: 0   // 第四周完成0%
    },
    skills: [
        { id: "skill1", name: "解释生成式AI与传统AI的区别", completed: true },
        { id: "skill2", name: "设计有效的AI提示词", completed: true },
        { id: "skill3", name: "识别适合AI解决的实际问题", completed: false },
        { id: "skill4", name: "说出至少3种AI的局限性", completed: true },
        { id: "skill5", name: "规划一个简单的AI辅助项目", completed: false }
    ],
    practiceProjects: [],
    lastActive: new Date().toISOString()
};

// 提示工程构建器配置
const promptBuilderConfig = {
    roles: [
        { id: "expert", name: "领域专家", description: "在特定领域有深厚知识的专家" },
        { id: "teacher", name: "教师", description: "擅长解释复杂概念的教师" },
        { id: "writer", name: "作家", description: "有创造力的写作专家" },
        { id: "developer", name: "开发者", description: "经验丰富的软件工程师" },
        { id: "analyst", name: "分析师", description: "善于分析和总结的专业人士" },
        { id: "creative", name: "创意总监", description: "富有创造力和洞察力的创意专家" },
        { id: "consultant", name: "咨询顾问", description: "提供专业建议的顾问" },
        { id: "researcher", name: "研究员", description: "严谨的科学研究人员" }
    ],
    
    formats: [
        { id: "paragraph", name: "段落", description: "连贯的段落形式" },
        { id: "list", name: "列表", description: "项目符号或编号列表" },
        { id: "table", name: "表格", description: "结构化的表格形式" },
        { id: "code", name: "代码", description: "编程代码格式" },
        { id: "json", name: "JSON格式", description: "结构化的JSON数据" },
        { id: "markdown", name: "Markdown文档", description: "带有格式的Markdown" },
        { id: "outline", name: "大纲", description: "分层级的大纲结构" },
        { id: "email", name: "邮件", description: "正式的电子邮件格式" }
    ],
    
    tones: [
        { id: "formal", name: "正式", description: "专业、正式的语言风格" },
        { id: "casual", name: "轻松", description: "轻松、友好的语气" },
        { id: "professional", name: "专业", description: "专业但不过于正式" },
        { id: "friendly", name: "友好", description: "温暖、亲切的语气" },
        { id: "persuasive", name: "有说服力", description: "具有说服力的语言" },
        { id: "technical", name: "技术性", description: "技术性强、详细精确" },
        { id: "simple", name: "简单", description: "简单易懂的语言" },
        { id: "academic", name: "学术", description: "学术性、研究导向" }
    ],
    
    requirementExamples: [
        "包含具体的数据和事实",
        "提供实际案例说明",
        "从正反两方面分析",
        "给出具体实施步骤",
        "比较不同方案的优缺点",
        "预测可能的结果和影响",
        "提供参考资料来源",
        "考虑不同受众的需求"
    ]
};

// 课程名言
const quotes = [
    {
        text: "不要等待完美才开始使用AI。就像学骑自行车，你必须真正骑上去才能学会。AI正在快速进化，但最大的风险不是使用时的错误，而是根本不开始使用。",
        author: "吴恩达教授"
    },
    {
        text: "AI不会取代人类，但会用AI的人会取代不用AI的人。生成式AI的普及不是技术问题，而是学习问题。",
        author: "基于吴恩达理念"
    },
    {
        text: "最好的学习AI的方式是通过实践。不要只是阅读关于AI的文章，而是真正使用AI工具解决实际问题。",
        author: "AI学习原则"
    },
    {
        text: "生成式AI的能力不在于它知道什么，而在于它如何应用所学。同样，你的价值不在于你知道多少AI知识，而在于你如何应用AI解决实际问题。",
        author: "学习启示"
    }
];

// 导出数据（如果在模块化环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        courseData,
        userProgress,
        promptBuilderConfig,
        quotes
    };
}