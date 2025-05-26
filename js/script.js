// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // 点击导航链接后关闭菜单
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加滚动动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .paper-item, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // 初始添加淡入动画类
    document.querySelectorAll('.project-card, .paper-item, .about-content').forEach(element => {
        element.classList.add('hidden');
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    
    // 初始检查
    animateOnScroll();

    // 添加邮箱复制功能
    const emailLink = document.querySelector('.email-link');
    const email = 'djy20182019@gmail.com';
    
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 复制邮箱到剪贴板
        navigator.clipboard.writeText(email).then(() => {
            // 创建提示元素
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-text';
            tooltip.textContent = 'Copied! 📧 djy20182019@gmail.com';
            
            // 添加到邮箱链接元素中
            emailLink.appendChild(tooltip);
            
            // 2秒后移除提示
            setTimeout(() => {
                tooltip.style.opacity = '0';
                setTimeout(() => {
                    emailLink.removeChild(tooltip);
                }, 300);
            }, 2000);
        });
    });
});

// 添加CSS动画类
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
