// js/script.js

const HealthBridge = {
    // State Management
    state: {
        lang: localStorage.getItem('hb-lang') || 'en',
        theme: localStorage.getItem('hb-theme') || 'light',
        sliderIndex: 0,
        doctors: [
            { name: 'Dr. Sarah Chen', specialty: 'cardiology', rating: 4.9, image: '👩‍⚕️' },
            { name: 'Dr. Ahmed Hassan', specialty: 'neurology', rating: 4.8, image: '👨‍⚕️' },
            { name: 'Dr. Maria Garcia', specialty: 'pediatrics', rating: 5.0, image: '👩‍⚕️' },
            { name: 'Dr. John Smith', specialty: 'dermatology', rating: 4.7, image: '👨‍⚕️' },
            { name: 'Dr. Fatima Ali', specialty: 'cardiology', rating: 4.9, image: '👩‍⚕️' },
            { name: 'Dr. David Kim', specialty: 'orthopedics', rating: 4.8, image: '👨‍⚕️' }
        ],
        chatHistory: []
    },

    // Translations
    translations: {
        en: {
            nav_home: 'Home', nav_services: 'Services', nav_doctors: 'Doctors',
            nav_dashboard: 'Dashboard', nav_contact: 'Contact', login: 'Login',
            emergency: 'Emergency', hero_badge: 'AI-Powered Healthcare',
            hero_title_1: 'Your Health,', hero_title_2: 'Simplified',
            hero_desc: 'Experience the future of healthcare with our smart digital platform. Connect with top doctors, manage appointments, and track your wellness journey.',
            btn_book_now: 'Book Appointment', btn_check_symptoms: 'Check Symptoms',
            health_score: 'Health Score', last_updated: 'Updated today',
            excellent: 'Excellent', heart_rate: 'BPM', oxygen: 'O₂', bp: 'BP',
            next_appointment: 'Next Appointment', find_doctor: 'Find Your Doctor',
            search_placeholder: 'Search doctors, specialties...', search: 'Search',
            filter_all: 'All', filter_cardiology: 'Cardiology', filter_neurology: 'Neurology',
            filter_pediatrics: 'Pediatrics', filter_dermatology: 'Dermatology',
            filter_orthopedics: 'Orthopedics', our_services: 'Our Services',
            comprehensive_care: 'Comprehensive Care', service_ai: 'AI Diagnosis',
            service_ai_desc: 'Advanced symptom analysis using machine learning algorithms',
            service_tele: 'Telemedicine', service_tele_desc: '24/7 virtual consultations with world-class specialists',
            service_emergency: 'Emergency Care', service_emergency_desc: 'Rapid response emergency services with real-time tracking',
            service_monitor: 'Remote Monitoring', service_monitor_desc: 'Continuous health tracking with smart device integration',
            learn_more: 'Learn more', ai_checker: 'AI Symptom Checker',
            ai_checker_desc: 'Describe your symptoms for instant preliminary analysis',
            chat_welcome: 'Hello! I\'m your AI health assistant. Please describe your symptoms in detail.',
            type_symptoms: 'Type your symptoms...', common_symptoms: 'Common:',
            patient_portal: 'Patient Portal', your_dashboard: 'Your Dashboard',
            upcoming_apps: 'Upcoming Appointments', confirmed: 'Confirmed',
            pending: 'Pending', view_all: 'View All', med_reminders: 'Medicine Reminders',
            recent_activity: 'Recent Activity', virtual_queue: 'Virtual Queue',
            people_ahead: 'People ahead of you', testimonials_tag: 'Testimonials',
            patient_stories: 'Patient Stories', stay_hydrated: 'Stay Hydrated',
            hydration_tip: 'Drink at least 8 glasses of water daily for optimal health',
            daily_walk: 'Daily Walk', walk_tip: '30 minutes of walking reduces heart disease risk by 40%',
            quality_sleep: 'Quality Sleep', sleep_tip: 'Maintain 7-8 hours of sleep for better immunity',
            ready_start: 'Ready to Take Control?', cta_desc: 'Join thousands of patients who trust HealthBridge for their healthcare needs.',
            get_started: 'Get Started Free', contact_sales: 'Contact Sales',
            footer_desc: 'Revolutionizing healthcare through technology and compassion. Your health, our priority.',
            quick_links: 'Quick Links', support: 'Support', help_center: 'Help Center',
            privacy: 'Privacy Policy', terms: 'Terms of Service', contact_us: 'Contact',
            rights_reserved: 'All rights reserved.', stat_patients: 'Patients Treated',
            stat_doctors: 'Expert Doctors', stat_satisfaction: 'Satisfaction'
        },
        ar: {
            nav_home: 'الرئيسية', nav_services: 'الخدمات', nav_doctors: 'الأطباء',
            nav_dashboard: 'لوحة التحكم', nav_contact: 'اتصل بنا', login: 'تسجيل الدخول',
            emergency: 'طوارئ', hero_badge: 'رعاية صحية بالذكاء الاصطناعي',
            hero_title_1: 'صحتك،', hero_title_2: 'بشكل مبسط',
            hero_desc: 'اختبر مستقبل الرعاية الصحية مع منصتنا الرقمية الذكية. تواصل مع أفضل الأطباء، وأدر المواعيد، وتتبع رحلتك الصحية.',
            btn_book_now: 'احجز موعداً', btn_check_symptoms: 'فحص الأعراض',
            health_score: 'النقاط الصحية', last_updated: 'تم التحديث اليوم',
            excellent: 'ممتاز', heart_rate: 'نبض', oxygen: 'أكسجين', bp: 'ضغط',
            next_appointment: 'الموعد القادم', find_doctor: 'ابحث عن طبيب',
            search_placeholder: 'ابحث عن أطباء، تخصصات...', search: 'بحث',
            filter_all: 'الكل', filter_cardiology: 'قلبية', filter_neurology: 'عصبية',
            filter_pediatrics: 'أطفال', filter_dermatology: 'جلدية',
            filter_orthopedics: 'عظام', our_services: 'خدماتنا',
            comprehensive_care: 'رعاية شاملة', service_ai: 'التشخيص الذكي',
            service_ai_desc: 'تحليل الأعراض المتقدم باستخدام خوارزميات التعلم الآلي',
            service_tele: 'الاستشارات الطبية', service_tele_desc: 'استشارات افتراضية على مدار الساعة مع متخصصين عالميين',
            service_emergency: 'رعاية الطوارئ', service_emergency_desc: 'خدمات طوارئ سريعة الاستجابة مع تتبع فوري',
            service_monitor: 'المراقبة عن بُعد', service_monitor_desc: 'تتبع صحي مستمر مع دمج الأجهزة الذكية',
            learn_more: 'اقرأ المزيد', ai_checker: 'فاحص الأعراض بالذكاء الاصطناعي',
            ai_checker_desc: 'صف أعراضك للتحليل الأولي الفوري',
            chat_welcome: 'مرحباً! أنا مساعدك الصحي الذكي. يرجى وصف أعراضك بالتفصيل.',
            type_symptoms: 'اكتب أعراضك...', common_symptoms: 'شائع:',
            patient_portal: 'بوابة المريض', your_dashboard: 'لوحة تحكمك',
            upcoming_apps: 'المواعيد القادمة', confirmed: 'مؤكد',
            pending: 'معلق', view_all: 'عرض الكل', med_reminders: 'تذكير الأدوية',
            recent_activity: 'النشاط الأخير', virtual_queue: 'القافلة الافتراضية',
            people_ahead: 'أشخاص أمامك', testimonials_tag: 'آراء المرضى',
            patient_stories: 'قصص المرضى', stay_hydrated: 'حافظ على الترطيب',
            hydration_tip: 'اشرب 8 أكواب من الماء يومياً لصحة مثلى',
            daily_walk: 'المشي اليومي', walk_tip: '30 دقيقة مشي تقلل خطر أمراض القلب بنسبة 40%',
            quality_sleep: 'نوم جيد', sleep_tip: 'حافظ على 7-8 ساعات نوم لمناعة أفضل',
            ready_start: 'مستعد للتحكم بصحتك؟', cta_desc: 'انضم لآلاف المرضى الذين يثقون بـهيلث بريدج لاحتياجاتهم الصحية.',
            get_started: 'ابدأ مجاناً', contact_sales: 'تواصل مع المبيعات',
            footer_desc: 'ثورة في الرعاية الصحية من خلال التكنولوجيا والرحمة. صحتك، أولويتنا.',
            quick_links: 'روابط سريعة', support: 'الدعم', help_center: 'مركز المساعدة',
            privacy: 'سياسة الخصوصية', terms: 'شروط الخدمة', contact_us: 'اتصل بنا',
            rights_reserved: 'جميع الحقوق محفوظة.', stat_patients: 'مريض تم علاجهم',
            stat_doctors: 'طبيب خبير', stat_satisfaction: 'رضا'
        }
    },

    // Initialize
    init() {
        this.setupTheme();
        this.setupLanguage();
        this.setupNavigation();
        this.setupSearch();
        this.setupChat();
        this.setupAnimations();
        this.setupScrollProgress();
        this.renderDoctors();
        this.setupCounters();
        
        // Event Listeners
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('langToggle').addEventListener('click', () => this.toggleLanguage());
        document.getElementById('mobileToggle').addEventListener('click', () => this.toggleMobileMenu());
        document.getElementById('emergencyBtn').addEventListener('click', () => this.handleEmergency());
        
        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navMenu').classList.remove('active');
            });
        });
    },

    // Theme Management
    setupTheme() {
        if (this.state.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    },

    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.state.theme);
        localStorage.setItem('hb-theme', this.state.theme);
    },

    // Language Management
    setupLanguage() {
        this.updateLanguage();
    },

    toggleLanguage() {
        this.state.lang = this.state.lang === 'en' ? 'ar' : 'en';
        localStorage.setItem('hb-lang', this.state.lang);
        this.updateLanguage();
    },

    updateLanguage() {
        const t = this.translations[this.state.lang];
        document.documentElement.lang = this.state.lang;
        document.documentElement.dir = this.state.lang === 'ar' ? 'rtl' : 'ltr';
        document.getElementById('langToggle').querySelector('.lang-code').textContent = this.state.lang === 'en' ? 'AR' : 'EN';
        
        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.placeholder = t[key];
        });
    },

    // Navigation
    setupNavigation() {
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    },

    toggleMobileMenu() {
        document.getElementById('navMenu').classList.toggle('active');
    },

    // Scroll Progress
    setupScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    },

    // Doctors & Search
    renderDoctors(filter = 'all', searchTerm = '') {
        const grid = document.getElementById('doctorsGrid');
        const t = this.translations[this.state.lang];
        
        let filtered = this.state.doctors;
        
        if (filter !== 'all') {
            filtered = filtered.filter(d => d.specialty === filter);
        }
        
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(d => 
                d.name.toLowerCase().includes(term) || 
                d.specialty.toLowerCase().includes(term)
            );
        }
        
        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">${t.no_results || 'No doctors found'}</div>`;
            return;
        }
        
        grid.innerHTML = filtered.map(doctor => `
            <div class="glass-card doctor-card">
                <div class="doctor-image">${doctor.image}</div>
                <h3>${doctor.name}</h3>
                <p>${t['filter_' + doctor.specialty] || doctor.specialty}</p>
                <div style="color: #FBBF24; margin-bottom: 12px;">★ ${doctor.rating}</div>
                <button class="btn btn-primary" style="width: 100%;" onclick="app.showToast('${t.appointment_booked || 'Appointment request sent!'}')">
                    ${t.btn_book_now}
                </button>
            </div>
        `).join('');
    },

    setupSearch() {
        const searchInput = document.getElementById('doctorSearch');
        const filterChips = document.querySelectorAll('.filter-chip');
        let searchTimeout;
        
        // Debounced search
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
                this.renderDoctors(activeFilter, e.target.value);
            }, 300);
        });
        
        // Filter chips
        filterChips.forEach(chip => {
            chip.addEventListener('click', function() {
                filterChips.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                const searchTerm = searchInput.value;
                app.renderDoctors(filter, searchTerm);
            });
        });
    },

    // AI Chat
    setupChat() {
        const input = document.getElementById('symptomInput');
        const sendBtn = document.getElementById('sendSymptom');
        const container = document.getElementById('chatContainer');
        
        const sendMessage = () => {
            const text = input.value.trim();
            if (!text) return;
            
            // Add user message
            this.addChatMessage(text, 'user');
            input.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const responses = this.state.lang === 'ar' ? [
                    'أفهم. هل تشعر بأي ألم مصاحب؟',
                    'منذ متى وأنت تشعر بهذه الأعراض؟',
                    'أنصحك بزيارة الطبيب للفحص الشامل. هل تريد حجز موعد؟',
                    'هل جربت أي أدوية حتى الآن؟'
                ] : [
                    'I understand. Do you have any accompanying pain?',
                    'How long have you been experiencing these symptoms?',
                    'I recommend visiting a doctor for a comprehensive checkup. Would you like to book an appointment?',
                    'Have you tried any medication so far?'
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                this.addChatMessage(randomResponse, 'bot');
            }, 1000);
        };
        
        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
        
        // Quick symptom tags
        document.querySelectorAll('.symptom-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                input.value = this.textContent;
                sendMessage();
            });
        });
    },

    addChatMessage(text, sender) {
        const container = document.getElementById('chatContainer');
        const avatar = sender === 'bot' ? '🤖' : '👤';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">${text}</div>
        `;
        
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    },

    // Animations
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate score circle if present
                    const scoreProgress = entry.target.querySelector('.score-progress');
                    if (scoreProgress) {
                        setTimeout(() => {
                            scoreProgress.style.strokeDashoffset = '22';
                        }, 500);
                    }
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.glass-card').forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    },

    // Counters
    setupCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            entry.target.textContent = target.toLocaleString();
                            clearInterval(timer);
                        } else {
                            entry.target.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 16);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    },

    // Slider
    moveSlider(direction) {
        const track = document.querySelector('.testimonial-track');
        const cards = document.querySelectorAll('.testimonial-card');
        const cardWidth = cards[0].offsetWidth + 24; // including gap
        
        this.state.sliderIndex += direction;
        
        const maxIndex = cards.length - Math.floor(window.innerWidth / cardWidth);
        
        if (this.state.sliderIndex < 0) this.state.sliderIndex = 0;
        if (this.state.sliderIndex > maxIndex) this.state.sliderIndex = maxIndex;
        
        track.style.transform = `translateX(${-this.state.sliderIndex * cardWidth}px)`;
    },

    // Emergency
    handleEmergency() {
        const t = this.translations[this.state.lang];
        this.showModal('emergency');
        this.showToast(this.state.lang === 'ar' ? 'جاري الاتصال بالطوارئ...' : 'Connecting to emergency...', 'error');
    },

    // Modal
    showModal(type) {
        const modal = document.getElementById('modal');
        const body = document.getElementById('modalBody');
        const t = this.translations[this.state.lang];
        
        let content = '';
        
        if (type === 'appointment') {
            content = `
                <h2>${t.btn_book_now}</h2>
                <p style="margin: 16px 0; color: var(--text-secondary);">Select your preferred doctor and time slot.</p>
                <form onsubmit="event.preventDefault(); app.closeModal(); app.showToast('${t.appointment_booked || 'Appointment booked successfully!'}');">
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Select Doctor</label>
                        <select style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface);">
                            ${this.state.doctors.map(d => `<option>${d.name}</option>`).join('')}
                        </select>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Select Date</label>
                        <input type="date" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface);">
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">${t.btn_book_now}</button>
                </form>
            `;
        } else if (type === 'emergency') {
            content = `
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 16px;">🚨</div>
                    <h2 style="color: var(--emergency); margin-bottom: 16px;">Emergency Services</h2>
                    <p style="margin-bottom: 24px; color: var(--text-secondary);">If this is a life-threatening emergency, please call your local emergency number immediately.</p>
                    <div style="display: flex; gap: 12px; flex-direction: column;">
                        <a href="tel:911" class="btn btn-primary" style="background: var(--emergency);">Call Emergency (911)</a>
                        <button class="btn btn-secondary" onclick="app.closeModal()">Cancel</button>
                    </div>
                </div>
            `;
        }
        
        body.innerHTML = content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    },

    // Toast Notifications
    showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span>${type === 'error' ? '⚠️' : '✓'}</span>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Initialize app
const app = HealthBridge;
document.addEventListener('DOMContentLoaded', () => app.init());