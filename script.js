// 吴恩达《Generative AI for Everyone》学习网站 - 主脚本文件

// 全局变量
let currentModuleId = 1;
let currentWeek = 1;
let learningProgress = {};
let activeModal = null;

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log("网站加载完成 - 吴恩达《Generative AI for Everyone》学习中心");
    
    // 初始化所有功能
    initNavigation();
    initMobileMenu();
    initModuleNavigation();
    initWeekTabs();
    initPromptBuilder();
    initToolsFilter();
    initProgressTracking();
    initBackToTop();
    initModals();
    initScrollAnimations();
    initQuickStart();
    
    // 加载初始数据
    loadModuleContent(currentModuleId);
    loadTools();
    updateProgressDisplay();
    
    // 设置自动保存
    setupAutoSave();
});

// ==================== 初始化函数 ====================

// 初始化导航
function initNavigation() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 更新活动菜单项
                updateActiveNavItem(targetId);
                
                // 平滑滚动
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 更新活动导航项
function updateActiveNavItem(targetId) {
    // 移除所有活动状态
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.classList.remove('active');
    });
    
    // 添加活动状态到对应项
    const navItem = document.querySelector(`.nav-menu a[href="${targetId}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
}

// 初始化移动端菜单
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // 点击菜单项后关闭菜单
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
}

// 初始化模块导航
function initModuleNavigation() {
    // 模块目录链接
    document.querySelectorAll('.toc-card a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const moduleId = this.getAttribute('href').replace('#module-', '');
            loadModuleContent(parseInt(moduleId));
            
            // 滚动到模块区域
            document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 模块导航按钮
    document.querySelectorAll('.module-btn').forEach(button => {
        button.addEventListener('click', function() {
            const moduleId = this.getAttribute('data-module');
            loadModuleContent(parseInt(moduleId));
        });
    });
    
    // 上一章/下一章按钮
    const prevBtn = document.querySelector('[data-module="prev"]');
    const nextBtn = document.querySelector('[data-module="next"]');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentModuleId > 1) {
                loadModuleContent(currentModuleId - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentModuleId < 16) { // 假设有16个模块
                loadModuleContent(currentModuleId + 1);
            }
        });
    }
}

// 初始化周历标签页
function initWeekTabs() {
    const weekTabs = document.querySelectorAll('.week-tab');
    const weekContents = document.querySelectorAll('.week-content');
    
    weekTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const weekId = this.getAttribute('data-week');
            
            // 更新活动标签
            weekTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应内容
            weekContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `week-${weekId}`) {
                    content.classList.add('active');
                }
            });
            
            currentWeek = parseInt(weekId);
        });
    });
}

// 初始化提示工程构建器
function initPromptBuilder() {
    // 初始化角色选择
    const roleSelect = document.getElementById('role');
    if (roleSelect) {
        promptBuilderConfig.roles.forEach(role => {
            const option = document.createElement('option');
            option.value = role.id;
            option.textContent = role.name;
            roleSelect.appendChild(option);
        });
    }
    
    // 初始化格式选择
    const formatSelect = document.getElementById('format');
    if (formatSelect) {
        promptBuilderConfig.formats.forEach(format => {
            const option = document.createElement('option');
            option.value = format.id;
            option.textContent = format.name;
            formatSelect.appendChild(option);
        });
    }
    
    // 初始化语气选择
    const toneSelect = document.getElementById('tone');
    if (toneSelect) {
        promptBuilderConfig.tones.forEach(tone => {
            const option = document.createElement('option');
            option.value = tone.id;
            option.textContent = tone.name;
            toneSelect.appendChild(option);
        });
    }
    
    // 添加要求按钮
    const addRequirementBtn = document.getElementById('add-requirement');
    const requirementsList = document.getElementById('requirements');
    
    if (addRequirementBtn && requirementsList) {
        addRequirementBtn.addEventListener('click', function() {
            addRequirementItem();
        });
        
        // 初始添加一个要求
        addRequirementItem();
    }
    
    // 生成提示按钮
    const generatePromptBtn = document.getElementById('generate-prompt');
    if (generatePromptBtn) {
        generatePromptBtn.addEventListener('click', generatePrompt);
    }
    
    // 重置表单按钮
    const resetFormBtn = document.getElementById('reset-form');
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', resetPromptForm);
    }
    
    // 复制提示按钮
    const copyPromptBtn = document.getElementById('copy-prompt');
    if (copyPromptBtn) {
        copyPromptBtn.addEventListener('click', copyPromptToClipboard);
    }
    
    // 测试提示按钮
    const testPromptBtn = document.getElementById('test-prompt');
    if (testPromptBtn) {
        testPromptBtn.addEventListener('click', testPrompt);
    }
    
    // 使用示例按钮
    document.querySelectorAll('.use-example').forEach(button => {
        button.addEventListener('click', function() {
            const exampleId = this.getAttribute('data-example');
            usePromptExample(exampleId);
        });
    });
    
    // 显示答案按钮
    document.querySelectorAll('.show-answer').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = this.closest('.practice-card').querySelector('.answer').id;
            const answerDiv = document.getElementById(practiceId);
            if (answerDiv) {
                answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
}

// 添加要求项
function addRequirementItem(content = '') {
    const requirementsList = document.getElementById('requirements');
    if (!requirementsList) return;
    
    const requirementId = `req-${Date.now()}`;
    const requirementItem = document.createElement('div');
    requirementItem.className = 'requirement-item';
    requirementItem.innerHTML = `
        <input type="text" id="${requirementId}" placeholder="输入具体要求..." value="${content}">
        <button type="button" class="remove-requirement" title="删除要求">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    requirementsList.appendChild(requirementItem);
    
    // 添加删除功能
    const removeBtn = requirementItem.querySelector('.remove-requirement');
    removeBtn.addEventListener('click', function() {
        requirementItem.remove();
    });
}

// 生成提示
function generatePrompt() {
    const roleSelect = document.getElementById('role');
    const taskInput = document.getElementById('task');
    const formatSelect = document.getElementById('format');
    const toneSelect = document.getElementById('tone');
    const requirementsList = document.getElementById('requirements');
    
    if (!roleSelect || !taskInput || !formatSelect || !toneSelect || !requirementsList) return;
    
    // 收集数据
    const role = roleSelect.value;
    const task = taskInput.value.trim();
    const format = formatSelect.value;
    const tone = toneSelect.value;
    
    // 收集所有要求
    const requirements = [];
    requirementsList.querySelectorAll('input').forEach(input => {
        if (input.value.trim()) {
            requirements.push(input.value.trim());
        }
    });
    
    // 验证必填字段
    if (!task) {
        showModal('提示生成', '<p class="text-warning">请输入任务描述！</p>');
        return;
    }
    
    // 构建提示
    let prompt = '';
    
    // 角色设定
    if (role) {
        const roleObj = promptBuilderConfig.roles.find(r => r.id === role);
        prompt += `你是一位${roleObj.name}。`;
    }
    
    // 任务描述
    prompt += task;
    
    // 具体要求
    if (requirements.length > 0) {
        prompt += '具体要求：';
        requirements.forEach((req, index) => {
            prompt += `${index + 1}. ${req}；`;
        });
    }
    
    // 输出格式
    if (format) {
        const formatObj = promptBuilderConfig.formats.find(f => f.id === format);
        prompt += `请以${formatObj.name}的形式输出。`;
    }
    
    // 语气风格
    if (tone) {
        const toneObj = promptBuilderConfig.tones.find(t => t.id === tone);
        prompt += `使用${toneObj.name}的语气。`;
    }
    
    // 显示生成的提示
    const outputArea = document.getElementById('prompt-output');
    if (outputArea) {
        outputArea.innerHTML = `<pre>${prompt}</pre>`;
    }
    
    // 保存到历史
    savePromptHistory(prompt);
}

// 重置提示表单
function resetPromptForm() {
    document.getElementById('role').value = '';
    document.getElementById('task').value = '';
    document.getElementById('format').value = '';
    document.getElementById('tone').value = '';
    
    const requirementsList = document.getElementById('requirements');
    if (requirementsList) {
        requirementsList.innerHTML = '';
        addRequirementItem();
    }
    
    const outputArea = document.getElementById('prompt-output');
    if (outputArea) {
        outputArea.innerHTML = '<p class="placeholder">提示将在这里生成...</p>';
    }
}

// 复制提示到剪贴板
function copyPromptToClipboard() {
    const outputArea = document.getElementById('prompt-output');
    if (!outputArea) return;
    
    const promptText = outputArea.textContent;
    if (!promptText || promptText.includes('提示将在这里生成')) {
        showModal('复制提示', '<p class="text-warning">请先生成提示！</p>');
        return;
    }
    
    navigator.clipboard.writeText(promptText).then(() => {
        showModal('复制成功', '<p class="text-success">提示已复制到剪贴板！</p>');
    }).catch(err => {
        console.error('复制失败:', err);
        showModal('复制失败', '<p class="text-danger">复制失败，请手动复制。</p>');
    });
}

// 测试提示
function testPrompt() {
    const outputArea = document.getElementById('prompt-output');
    if (!outputArea) return;
    
    const promptText = outputArea.textContent;
    if (!promptText || promptText.includes('提示将在这里生成')) {
        showModal('测试提示', '<p class="text-warning">请先生成提示！</p>');
        return;
    }
    
    showModal('测试提示', `
        <h4>测试提示效果</h4>
        <p>你的提示已准备就绪！现在可以：</p>
        <ol>
            <li>打开一个AI聊天工具（如ChatGPT）</li>
            <li>将下面的提示复制粘贴进去</li>
            <li>观察AI的响应，评估效果</li>
            <li>根据需要调整提示</li>
        </ol>
        <div class="test-prompt-box">
            <pre>${promptText}</pre>
        </div>
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="copyPromptToClipboard()">复制提示</button>
            <button class="btn btn-outline" onclick="resetPromptForm()">创建新提示</button>
        </div>
    `);
}

// 使用提示示例
function usePromptExample(exampleId) {
    const example = courseData.promptExamples[exampleId];
    if (!example) return;
    
    // 填充表单
    document.getElementById('task').value = example.prompt;
    
    // 清空其他字段
    document.getElementById('role').value = '';
    document.getElementById('format').value = '';
    document.getElementById('tone').value = '';
    
    // 清空要求并添加示例说明
    const requirementsList = document.getElementById('requirements');
    if (requirementsList) {
        requirementsList.innerHTML = '';
        addRequirementItem('参考示例中的具体要求');
    }
    
    showModal('使用示例', `
        <h4>${example.title}</h4>
        <p><strong>描述：</strong>${example.description}</p>
        <p><strong>适用场景：</strong>${example.useCase}</p>
        <div class="example-preview">
            <h5>示例提示：</h5>
            <pre>${example.prompt}</pre>
        </div>
        <p class="text-info">提示已填入表单，您可以根据需要修改。</p>
    `);
}

// 保存提示历史
function savePromptHistory(prompt) {
    try {
        let history = JSON.parse(localStorage.getItem('promptHistory')) || [];
        history.unshift({
            prompt: prompt,
            timestamp: new Date().toISOString()
        });
        
        // 只保留最近20条
        if (history.length > 20) {
            history = history.slice(0, 20);
        }
        
        localStorage.setItem('promptHistory', JSON.stringify(history));
    } catch (error) {
        console.error('保存提示历史失败:', error);
    }
}

// 初始化AI工具筛选
function initToolsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 更新活动按钮
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选工具
            filterTools(filter);
        });
    });
}

// 筛选工具
function filterTools(filter) {
    const toolsGrid = document.querySelector('.tools-grid');
    if (!toolsGrid) return;
    
    let filteredTools;
    
    if (filter === 'all') {
        filteredTools = courseData.aiTools.all;
    } else {
        filteredTools = courseData.aiTools.all.filter(tool => tool.category === filter);
    }
    
    // 清空现有内容
    toolsGrid.innerHTML = '';
    
    // 添加筛选后的工具
    filteredTools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.borderTopColor = tool.color;
    
    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-icon" style="background-color: ${tool.color}20; color: ${tool.color};">
                <i class="${tool.icon}"></i>
            </div>
            <div class="tool-info">
                <h4>${tool.name}</h4>
                <div class="tool-company">${tool.company}</div>
            </div>
        </div>
        
        <div class="tool-description">
            ${tool.description}
        </div>
        
        <div class="tool-features">
            <h5>主要功能：</h5>
            <div class="tool-tags">
                ${tool.features.map(feature => `<span class="tool-tag">${feature}</span>`).join('')}
            </div>
        </div>
        
        <div class="tool-meta">
            <div class="tool-pricing">
                <i class="fas fa-tag"></i> ${tool.pricing}
            </div>
            <div class="tool-category">
                <i class="fas fa-folder"></i> ${getCategoryName(tool.category)}
            </div>
        </div>
        
        <div class="tool-actions">
            <a href="${tool.url}" target="_blank" class="btn btn-primary tool-link">
                <i class="fas fa-external-link-alt"></i> 访问网站
            </a>
        </div>
    `;
    
    return card;
}

// 获取分类名称
function getCategoryName(category) {
    const categoryNames = {
        'chat': '对话AI',
        'image': '图像生成',
        'code': '代码生成',
        'audio': '音频处理',
        'video': '视频生成',
        'productivity': '效率工具',
        'development': '开发工具'
    };
    
    return categoryNames[category] || category;
}

// 加载所有工具
function loadTools() {
    filterTools('all'); // 默认显示所有工具
}

// 初始化进度追踪
function initProgressTracking() {
    // 从本地存储加载进度
    loadProgressFromStorage();
    
    // 进度检查按钮
    const checkProgressBtn = document.getElementById('check-progress');
    if (checkProgressBtn) {
        checkProgressBtn.addEventListener('click', checkProgress);
    }
    
    // 技能复选框
    document.querySelectorAll('.quiz-option input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateSkillProgress(this.id, this.checked);
        });
    });
    
    // 下载按钮
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pack = this.getAttribute('data-pack');
            downloadResourcePack(pack);
        });
    });
    
    // 资源链接
    document.querySelectorAll('.resource-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceTitle = this.textContent;
            showModal('下载资源', `
                <h4>${resourceTitle}</h4>
                <p>资源下载即将开始...</p>
                <p class="text-muted">注：这是一个演示功能。在实际网站中，这里会链接到真实的资源文件。</p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="simulateDownload('${resourceTitle}')">
                        <i class="fas fa-download"></i> 开始下载
                    </button>
                </div>
            `);
        });
    });
}

// 检查进度
function checkProgress() {
    const checkboxes = document.querySelectorAll('.quiz-option input');
    let checkedCount = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) checkedCount++;
    });
    
    const totalSkills = checkboxes.length;
    const percentage = Math.round((checkedCount / totalSkills) * 100);
    
    let message = '';
    let suggestions = [];
    
    if (checkedCount === 0) {
        message = '<p class="text-warning">您还没有开始学习。请从第一周的内容开始！</p>';
        suggestions = [
            '从第一周的内容开始学习',
            '尝试使用AI工具进行实践',
            '完成基础概念学习'
        ];
    } else if (checkedCount < 3) {
        message = `<p class="text-info">您已掌握 ${checkedCount}/${totalSkills} 项技能。继续加油！建议复习前两周的内容。</p>`;
        suggestions = [
            '复习前两周的内容',
            '完成更多实践练习',
            '尝试设计自己的提示'
        ];
    } else if (checkedCount < totalSkills) {
        message = `<p class="text-success">您已掌握 ${checkedCount}/${totalSkills} 项技能。做得不错！继续完成剩下的学习内容。</p>`;
        suggestions = [
            '继续完成剩余模块',
            '尝试实际项目应用',
            '参与社区讨论'
        ];
    } else {
        message = '<p class="text-success">恭喜！您已完成所有学习目标！现在可以尝试实际应用AI解决问题了。</p>';
        suggestions = [
            '尝试实际项目应用',
            '加入AI学习社区',
            '关注AI最新发展'
        ];
    }
    
    // 创建进度圆环
    const progressCircle = `
        <div class="progress-circle-container">
            <div class="progress-circle" style="--percent: ${percentage}%">
                <span class="progress-text">${percentage}%</span>
            </div>
        </div>
    `;
    
    // 创建建议列表
    const suggestionsList = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
    
    showModal('学习进度检查', `
        <h4>您的学习进度</h4>
        ${progressCircle}
        ${message}
        <div class="progress-details">
            <h5>下一步建议：</h5>
            <ul>${suggestionsList}</ul>
        </div>
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="showModuleContent(${currentModuleId})">
                <i class="fas fa-book"></i> 继续学习
            </button>
            <button class="btn btn-outline" onclick="showWeekPlan(${currentWeek})">
                <i class="fas fa-calendar"></i> 查看周计划
            </button>
        </div>
    `);
}

// 更新技能进度
function updateSkillProgress(skillId, completed) {
    // 更新本地存储
    try {
        let progress = JSON.parse(localStorage.getItem('learningProgress')) || userProgress;
        
        // 找到对应的技能
        const skillIndex = progress.skills.findIndex(skill => skill.id === skillId);
        if (skillIndex !== -1) {
            progress.skills[skillIndex].completed = completed;
        }
        
        localStorage.setItem('learningProgress', JSON.stringify(progress));
        
        // 更新显示
        updateProgressDisplay();
    } catch (error) {
        console.error('更新技能进度失败:', error);
    }
}

// 更新进度显示
function updateProgressDisplay() {
    // 更新进度圆环
    document.querySelectorAll('.progress-circle[data-percent]').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', `${percent}%`);
    });
    
    // 更新技能复选框状态
    try {
        const progress = JSON.parse(localStorage.getItem('learningProgress')) || userProgress;
        
        progress.skills.forEach(skill => {
            const checkbox = document.getElementById(skill.id);
            if (checkbox) {
                checkbox.checked = skill.completed;
            }
        });
    } catch (error) {
        console.error('更新进度显示失败:', error);
    }
}

// 下载资源包
function downloadResourcePack(pack) {
    const packNames = {
        'full': '完整学习包',
        'light': '精简版',
        'mobile': '移动版'
    };
    
    const packName = packNames[pack] || '资源包';
    
    showModal('下载资源', `
        <h4>下载${packName}</h4>
        <div class="download-simulation">
            <div class="progress-bar">
                <div class="progress-fill" id="download-progress"></div>
            </div>
            <p id="download-status">准备下载...</p>
        </div>
        <p class="text-muted">这是一个演示功能。在实际网站中，这里会开始真实的文件下载。</p>
    `);
    
    // 模拟下载进度
    simulateDownloadProgress(packName);
}

// 模拟下载进度
function simulateDownloadProgress(packName) {
    let progress = 0;
    const progressBar = document.getElementById('download-progress');
    const statusText = document.getElementById('download-status');
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (statusText) {
            if (progress < 30) {
                statusText.textContent = '正在连接服务器...';
            } else if (progress < 60) {
                statusText.textContent = '正在准备文件...';
            } else if (progress < 90) {
                statusText.textContent = '正在下载...';
            } else {
                statusText.textContent = '下载完成！';
            }
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                closeModal();
                showModal('下载完成', `
                    <h4>${packName}下载完成！</h4>
                    <p class="text-success">资源包已成功下载到您的设备。</p>
                    <p>您现在可以：</p>
                    <ul>
                        <li>解压文件查看内容</li>
                        <li>按照学习指南开始学习</li>
                        <li>如有问题，查看帮助文档</li>
                    </ul>
                `);
            }, 500);
        }
    }, 200);
}

// 模拟下载
function simulateDownload(resourceName) {
    showModal('下载开始', `
        <h4>${resourceName}</h4>
        <p class="text-success">下载已开始！</p>
        <p>在实际网站中，浏览器会开始下载文件。</p>
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="closeModal()">确定</button>
        </div>
    `);
}

// 初始化返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // 滚动显示/隐藏按钮
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // 点击返回顶部
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 初始化模态框
function initModals() {
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (modal && closeModalBtn) {
        // 关闭按钮
        closeModalBtn.addEventListener('click', closeModal);
        
        // 点击外部关闭
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // ESC键关闭
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
    
    // 课程链接按钮
    const courseLinksBtn = document.getElementById('course-links');
    if (courseLinksBtn) {
        courseLinksBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showCourseLinks();
        });
    }
}

// 显示模态框
function showModal(title, content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <h3>${title}</h3>
            <div class="modal-content-inner">
                ${content}
            </div>
        `;
        
        modal.style.display = 'flex';
        activeModal = modal;
        
        // 防止背景滚动
        document.body.style.overflow = 'hidden';
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        activeModal = null;
        
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// 显示课程链接
function showCourseLinks() {
    const links = `
        <h4>吴恩达课程资源链接</h4>
        <div class="course-links">
            <div class="course-link-item">
                <i class="fas fa-external-link-alt"></i>
                <a href="https://www.coursera.org/learn/generative-ai-for-everyone" target="_blank">
                    Coursera课程主页
                </a>
                <span class="link-description">官方课程平台</span>
            </div>
            <div class="course-link-item">
                <i class="fas fa-external-link-alt"></i>
                <a href="https://www.deeplearning.ai/courses/generative-ai-for-everyone/" target="_blank">
                    DeepLearning.AI官网
                </a>
                <span class="link-description">课程官方网站</span>
            </div>
            <div class="course-link-item">
                <i class="fab fa-youtube"></i>
                <a href="https://www.youtube.com/playlist?list=PLkDaE6sCZn6F7kK7bR5kMh-2SJmWgvZqP" target="_blank">
                    YouTube课程播放列表
                </a>
                <span class="link-description">视频课程</span>
            </div>
        </div>
        
        <h4>其他推荐资源</h4>
        <div class="course-links">
            <div class="course-link-item">
                <i class="fas fa-graduation-cap"></i>
                <a href="https://learnprompting.org/zh-Hans/" target="_blank">
                    Learn Prompting（中文）
                </a>
                <span class="link-description">提示工程学习</span>
            </div>
            <div class="course-link-item">
                <i class="fas fa-book"></i>
                <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank">
                    OpenAI提示工程指南
                </a>
                <span class="link-description">官方最佳实践</span>
            </div>
            <div class="course-link-item">
                <i class="fab fa-github"></i>
                <a href="https://github.com/openai/openai-cookbook" target="_blank">
                    OpenAI Cookbook（GitHub）
                </a>
                <span class="link-description">实用代码示例</span>
            </div>
        </div>
    `;
    
    showModal('课程视频链接', links);
}

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.module-card, .tool-card, .resource-card, .timeline-item, .prompt-card, .example-card').forEach(el => {
        observer.observe(el);
    });
}

// 初始化快速开始
function initQuickStart() {
    const quickStartBtn = document.getElementById('quick-start');
    if (quickStartBtn) {
        quickStartBtn.addEventListener('click', function() {
            showModal('快速开始指南', `
                <h4>5分钟快速开始</h4>
                <p>按照以下步骤立即开始学习：</p>
                <ol class="quick-start-steps">
                    <li>
                        <strong>第一步：创建AI账号</strong>
                        <p>访问 <a href="https://chat.openai.com" target="_blank">ChatGPT</a> 或 <a href="https://claude.ai" target="_blank">Claude</a> 注册免费账号</p>
                    </li>
                    <li>
                        <strong>第二步：完成初体验</strong>
                        <p>向AI提问："用简单的语言解释什么是生成式AI"</p>
                    </li>
                    <li>
                        <strong>第三步：学习第一课</strong>
                        <p>阅读<a href="#module-1" onclick="loadModuleContent(1); closeModal();">第一模块：什么是生成式AI？</a></p>
                    </li>
                    <li>
                        <strong>第四步：实践练习</strong>
                        <p>完成模块中的实践任务，记录你的发现</p>
                    </li>
                    <li>
                        <strong>第五步：加入社区</strong>
                        <p>与其他学习者交流，分享你的体验</p>
                    </li>
                </ol>
                
                <div class="quick-start-tips">
                    <h5>学习建议：</h5>
                    <ul>
                        <li>每天学习30-60分钟，保持连续性</li>
                        <li>理论与实践结合，边学边用</li>
                        <li>记录学习心得和问题</li>
                        <li>不要害怕犯错，AI学习需要实践</li>
                    </ul>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="loadModuleContent(1); closeModal();">
                        <i class="fas fa-play"></i> 开始学习第一课
                    </button>
                </div>
            `);
        });
    }
}

// 设置自动保存
function setupAutoSave() {
    // 每30秒自动保存进度
    setInterval(() => {
        saveProgressToStorage();
    }, 30000);
    
    // 页面卸载时保存
    window.addEventListener('beforeunload', saveProgressToStorage);
}

// 保存进度到本地存储
function saveProgressToStorage() {
    try {
        // 收集当前进度
        const progress = {
            completedModules: userProgress.completedModules,
            currentModule: currentModuleId,
            weeklyProgress: userProgress.weeklyProgress,
            skills: userProgress.skills,
            practiceProjects: userProgress.practiceProjects,
            lastActive: new Date().toISOString()
        };
        
        localStorage.setItem('learningProgress', JSON.stringify(progress));
    } catch (error) {
        console.error('保存进度失败:', error);
    }
}

// 从本地存储加载进度
function loadProgressFromStorage() {
    try {
        const savedProgress = localStorage.getItem('learningProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            userProgress = progress;
            currentModuleId = progress.currentModule || 1;
            
            // 更新最后活动时间
            userProgress.lastActive = new Date().toISOString();
        }
    } catch (error) {
        console.error('加载进度失败:', error);
    }
}

// ==================== 内容加载函数 ====================

// 加载模块内容
function loadModuleContent(moduleId) {
    const module = courseData.modules[moduleId];
    if (!module) {
        console.error(`模块 ${moduleId} 不存在`);
        return;
    }
    
    currentModuleId = moduleId;
    
    // 构建模块内容HTML
    const moduleHTML = createModuleHTML(module);
    
    // 更新页面
    const modulesContainer = document.getElementById('modules');
    if (modulesContainer) {
        // 找到模块详情区域
        const moduleDetail = modulesContainer.querySelector('.module-detail:first-of-type');
        if (moduleDetail) {
            moduleDetail.outerHTML = moduleHTML;
        } else {
            // 如果没有找到，插入到模块区域
            const moduleSection = modulesContainer.querySelector('.section');
            if (moduleSection) {
                moduleSection.insertAdjacentHTML('beforeend', moduleHTML);
            }
        }
    }
    
    // 更新导航
    updateActiveModule(moduleId);
    
    // 保存进度
    if (!userProgress.completedModules.includes(moduleId)) {
        userProgress.completedModules.push(moduleId);
        saveProgressToStorage();
    }
    
    // 重新初始化交互元素
    initModuleInteractions();
    
    // 高亮代码
    if (window.hljs) {
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }
}

// 创建模块HTML
function createModuleHTML(module) {
    let sectionsHTML = '';
    let practicesHTML = '';
    let takeawaysHTML = '';
    
    // 构建章节内容
    if (module.sections && module.sections.length > 0) {
        module.sections.forEach(section => {
            sectionsHTML += `
                <div class="content-section">
                    <h4>${section.id} ${section.title}</h4>
                    <div class="content-box">
                        ${section.content}
                    </div>
                </div>
            `;
        });
    }
    
    // 构建实践练习
    if (module.practices && module.practices.length > 0) {
        practicesHTML = `
            <div class="practice-section">
                <h4><i class="fas fa-pencil-alt"></i> 实践练习</h4>
                ${module.practices.map(practice => `
                    <div class="practice-card">
                        <h5>${practice.title}</h5>
                        ${practice.content}
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // 构建关键要点
    if (module.takeaways && module.takeaways.length > 0) {
        takeawaysHTML = `
            <div class="key-takeaways">
                <h4><i class="fas fa-key"></i> 本章要点总结</h4>
                <ul>
                    ${module.takeaways.map(takeaway => `<li>${takeaway}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // 构建完整模块HTML
    return `
        <div class="module-detail" id="module-${module.id}">
            <div class="module-header">
                <div class="module-icon" style="background-color: ${module.color}20; color: ${module.color};">
                    <i class="${module.icon}"></i>
                </div>
                <div class="module-info">
                    <h3>第${module.id}章：${module.title}</h3>
                    <div class="module-meta">
                        <span class="badge badge-primary">第${module.week}周</span>
                        <span class="badge badge-outline"><i class="fas fa-clock"></i> ${module.duration}</span>
                        <span class="badge badge-outline"><i class="fas fa-book"></i> ${module.sections?.length || 0}个知识点</span>
                    </div>
                </div>
            </div>
            
            <div class="module-content">
                <div class="learning-objectives">
                    <h4><i class="fas fa-bullseye"></i> 学习目标</h4>
                    <ul>
                        ${module.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                </div>
                
                ${sectionsHTML}
                ${practicesHTML}
                ${takeawaysHTML}
                
                <div class="module-resources">
                    <h4><i class="fas fa-external-link-alt"></i> 进一步学习</h4>
                    <div class="resources-links">
                        ${(module.resources || []).map(resource => `
                            <a href="${resource.url}" target="_blank" class="resource-link">
                                <i class="fas fa-${resource.type === '视频' ? 'play' : resource.type === '文章' ? 'file-alt' : 'tools'}"></i>
                                ${resource.title}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 更新活动模块
function updateActiveModule(moduleId) {
    // 更新目录中的活动状态
    document.querySelectorAll('.toc-card a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#module-${moduleId}`) {
            link.classList.add('active');
        }
    });
    
    // 更新模块导航按钮状态
    const prevBtn = document.querySelector('[data-module="prev"]');
    const nextBtn = document.querySelector('[data-module="next"]');
    
    if (prevBtn) {
        prevBtn.disabled = moduleId <= 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = moduleId >= 16; // 假设有16个模块
        nextBtn.textContent = moduleId < 16 ? `下一章：${courseData.modules[moduleId + 1]?.title || '继续学习'}` : '已是最后一章';
    }
}

// 初始化模块交互
function initModuleInteractions() {
    // 重新绑定实践练习的答案显示
    document.querySelectorAll('.show-answer').forEach(button => {
        button.addEventListener('click', function() {
            const answerDiv = this.nextElementSibling;
            if (answerDiv && answerDiv.classList.contains('answer')) {
                answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
                this.textContent = answerDiv.style.display === 'none' ? '查看答案' : '隐藏答案';
            }
        });
    });
    
    // 重新绑定资源链接
    document.querySelectorAll('.resource-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                showModal('资源链接', `
                    <h4>${this.textContent}</h4>
                    <p>在实际网站中，这里会链接到真实的资源。</p>
                    <p class="text-muted">这是一个演示链接。</p>
                `);
            }
        });
    });
}

// 显示模块内容（用于按钮点击）
function showModuleContent(moduleId) {
    loadModuleContent(moduleId);
    closeModal();
    
    // 滚动到模块区域
    document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
}

// 显示周计划
function showWeekPlan(weekId) {
    const week = courseData.weeklyPlans[weekId];
    if (!week) return;
    
    let daysHTML = '';
    
    // 构建每天的计划
    Object.entries(week.days).forEach(([day, schedule]) => {
        let scheduleHTML = '';
        
        if (schedule.morning) {
            scheduleHTML += `
                <div class="time-slot">
                    <h6>上午：${schedule.morning.title}</h6>
                    <ul>
                        ${schedule.morning.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (schedule.afternoon) {
            scheduleHTML += `
                <div class="time-slot">
                    <h6>下午：${schedule.afternoon.title}</h6>
                    <ul>
                        ${schedule.afternoon.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (schedule.fullDay) {
            scheduleHTML += `
                <div class="time-slot">
                    <h6>全天：${schedule.fullDay.title}</h6>
                    <ul>
                        ${schedule.fullDay.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        daysHTML += `
            <div class="day-plan">
                <h5>${day}</h5>
                ${scheduleHTML}
            </div>
        `;
    });
    
    const modalContent = `
        <h4>第${weekId}周：${week.title}</h4>
        <p class="week-theme"><strong>主题：</strong>${week.theme}</p>
        
        <div class="week-schedule">
            ${daysHTML}
        </div>
        
        <div class="week-resources-modal">
            <h5>本周学习资源：</h5>
            <div class="resources-list">
                ${week.resources.map(resource => `
                    <div class="resource-item">
                        <i class="fas fa-${resource.type === '视频' ? 'play' : resource.type === '文档' ? 'file' : resource.type === '练习' ? 'tasks' : 'users'}"></i>
                        <span>${resource.title}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="startWeek(${weekId})">
                <i class="fas fa-play"></i> 开始本周学习
            </button>
        </div>
    `;
    
    showModal(`第${weekId}周学习计划`, modalContent);
}

// 开始周学习
function startWeek(weekId) {
    // 切换到对应周标签
    const weekTab = document.querySelector(`.week-tab[data-week="${weekId}"]`);
    if (weekTab) {
        weekTab.click();
    }
    
    // 找到本周的第一个模块
    let firstModuleId = null;
    for (const [id, module] of Object.entries(courseData.modules)) {
        if (module.week === weekId) {
            firstModuleId = parseInt(id);
            break;
        }
    }
    
    if (firstModuleId) {
        loadModuleContent(firstModuleId);
    }
    
    closeModal();
    
    // 滚动到周历区域
    document.getElementById('weeks').scrollIntoView({ behavior: 'smooth' });
}

// ==================== 辅助函数 ====================

// 显示答案（全局函数，供HTML内联调用）
function showAnswer(practiceId) {
    const answerDiv = document.getElementById(`answer-${practiceId}`);
    if (answerDiv) {
        answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
    }
}

// 导出到全局作用域（供HTML内联事件调用）
window.showAnswer = showAnswer;
window.showModuleContent = showModuleContent;
window.showWeekPlan = showWeekPlan;
window.copyPromptToClipboard = copyPromptToClipboard;
window.resetPromptForm = resetPromptForm;
window.closeModal = closeModal;
window.simulateDownload = simulateDownload;

// 页面加载完成后的最终初始化
window.addEventListener('load', function() {
    console.log("页面完全加载完成");
    
    // 显示欢迎消息（首次访问时）
    const firstVisit = !localStorage.getItem('hasVisited');
    if (firstVisit) {
        setTimeout(() => {
            showModal('欢迎来到生成式AI学习中心', `
                <h4>欢迎！</h4>
                <p>您已进入基于吴恩达《Generative AI for Everyone》课程的学习中心。</p>
                <p>在这里，您将：</p>
                <ul>
                    <li>从零开始学习生成式AI</li>
                    <li>掌握实际应用技能</li>
                    <li>获得丰富的实践机会</li>
                    <li>加入AI学习社区</li>
                </ul>
                <p><strong>开始学习的最佳时机就是现在！</strong></p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="closeModal(); localStorage.setItem('hasVisited', 'true');">
                        开始学习之旅
                    </button>
                    <button class="btn btn-outline" onclick="document.getElementById('quick-start').click(); closeModal();">
                        查看快速指南
                    </button>
                </div>
            `);
        }, 1000);
    }
    
    // 更新最后访问时间
    localStorage.setItem('lastVisit', new Date().toISOString());
});