/**
 * mcode AI Video Course — Interactive Logic & Multi-language System (RU / TJ / EN)
 * Lead Frontend & UI/UX Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  initI18n();

  // Initialize Interactive Modals
  initVideoModal();

  // Initialize Mobile Navigation
  initMobileMenu();

  // Initialize Code Copy Buttons
  initCopyActions();

  // Initialize Card Spotlight Glow Effect
  initSpotlightGlow();

  // Initialize Smooth Anchor Scrolling
  initSmoothScroll();
});

/* ==========================================================================
   Multi-Language (i18n) Engine
   ========================================================================== */

const translations = {
  ru: {
    // Nav
    nav_about: "О курсе",
    nav_curriculum: "Программа",
    nav_audience: "Для кого",
    nav_guarantees: "Гарантии",
    nav_buy: "Купить курс",

    // Hero
    hero_badge: "Новый формат видео 2026 года",
    hero_title_prefix: "Создавай кинематографичные видео за 1 минуту с помощью ИИ ",
    hero_title_accent: "Claude Code",
    hero_subtitle: "Без опыта монтажа, сложных программ и съемок. Пошаговый мини-курс + готовый ИИ-скилл в стиле Manus 2.0.",
    hero_btn_primary: "Забрать курс и скилл",
    hero_btn_secondary: "Смотреть демо видео",
    hero_mockup_terminal_title: "Терминал Claude Code — Автономный режиссер",
    hero_mockup_cmd_1: "claude skill load manus-video-engine",
    hero_mockup_res_1: "Скилл Manus 2.0 активирован. Правила 4K кинематографии применены.",
    hero_mockup_cmd_2: "claude \"Создай 4K промо-ролик для маркетплейса TAJSEL\"",
    hero_mockup_res_2: "Генерация раскадровки... 6 сцен синхронизированы • Рендер 60 FPS",
    hero_mockup_badge_live: "Готовый ролик • 4K Ultra HD",
    hero_mockup_duration: "0:45 сек",
    hero_mockup_watch_reel: "Смотреть в Instagram",

    // Stats
    stat_1_num: "0",
    stat_1_label: "секунд съемки",
    stat_1_desc: "Никаких камер, света, штативов и десятков дублей.",
    stat_2_num: "1",
    stat_2_label: "промпт для запуска",
    stat_2_desc: "Claude Code берет на себя весь пайплайн продакшена.",
    stat_3_num: "4K",
    stat_3_label: "качество Ultra HD",
    stat_3_desc: "Кинематографичный битрейт, плавный 60fps и фотореализм.",
    stat_4_num: "100%",
    stat_4_label: "автономия",
    stat_4_desc: "Скилл Manus 2.0 генерирует сцены по готовым правилам.",

    // AI Strip
    ai_strip_title: "Экосистема совместимости и поддерживаемые генераторы:",

    // Curriculum
    curriculum_badge: "ПОШАГОВЫЙ ПЛАН",
    curriculum_title: "Программа мини-курса: От нуля до 4K за 3 шага",
    curriculum_subtitle: "Структурированный материал без воды. Каждый шаг подкреплен скринкастами и готовыми файлами конфигурации.",
    
    step_1_tag: "ШАГ 01",
    step_1_time: "Модуль 1",
    step_1_title: "Установка и настройка Claude Code",
    step_1_desc: "Разбор терминала, окружения и подгрузка ключей.",
    step_1_p1: "Установка Node.js и глобального CLI Claude Code через один терминал.",
    step_1_p2: "Безопасное хранение API-ключей Anthropic без риска утечек.",
    step_1_p3: "Проверка работоспособности среды и запуск первого базового диалога.",

    step_2_tag: "ШАГ 02",
    step_2_time: "Модуль 2",
    step_2_title: "Интеграция скилла Manus 2.0",
    step_2_desc: "Установка .claude/skills, проверка через /skills и настройка правил.",
    step_2_p1: "Распаковка структуры скилла в системную директорию .claude/skills.",
    step_2_p2: "Верификация скилла в CLI Claude Code через системную команду /skills.",
    step_2_p3: "Тонкая настройка правил: режиссура, типы оптики (35mm/85mm), свет и темп.",

    step_3_tag: "ШАГ 03",
    step_3_time: "Модуль 3",
    step_3_title: "Генерация и монетизация",
    step_3_desc: "Написание промптов на русском/тоҷикӣ, рендеринг в 4K и запуск продаж.",
    step_3_p1: "Формула продающих промптов для коммерческих брендов и товаров.",
    step_3_p2: "Бесшовный апскейл до 4K 60FPS и синхронизация AI-звука и озвучки.",
    step_3_p3: "Схемы заработка: продажа роликов для Instagram Reels, TikTok и TAJSEL.",

    // Audience
    audience_badge: "ДЛЯ КОГО ЭТОТ КУРС",
    audience_title: "Кому мини-курс сэкономит месяцы проб и ошибок",
    audience_subtitle: "Технология подходит как для создания собственного контента, так и для заработка на услугах.",
    aud_1_title: "Контент-мейкеры и блогеры",
    aud_1_desc: "Генерируйте вирусные Reels, Shorts и TikTok без съемок своего лица, покупки дорогого света и микрофонов.",
    aud_2_title: "Селлеры маркетплейсов и e-commerce",
    aud_2_desc: "Создавайте динамичные видеообложки карточек товаров для TAJSEL, Wildberries и Instagram магазинов, поднимая конверсию в разы.",
    aud_3_title: "Фрилансеры и digital-агентства",
    aud_3_desc: "Продавайте создание ИИ-роликов клиентам от $30 до $100 за штуку при себестоимости в считанные центы и затратах времени в 5 минут.",
    aud_4_title: "Новички без опыта монтажа",
    aud_4_desc: "Вам не нужно изучать сложный Premiere Pro или After Effects — Claude Code берет нарезку и эффекты на себя.",

    // Value / Deliverables
    value_badge: "КОМПЛЕКТАЦИЯ КУРСА",
    value_title: "Что вы получаете сразу после покупки",
    value_subtitle: "Полный цифровой арсенал, который останется у вас навсегда с бесплатными обновлениями.",
    val_1_title: "Полный доступ к видеоурокам мини-курса",
    val_1_desc: "Пошаговые HD видеоуроки с демонстрацией экрана: от первой строчки в терминале до готового видео в галерее.",
    val_2_title: "Готовый файл ИИ-скилла Manus 2.0 (SKILL.md)",
    val_2_desc: "Эксклюзивный файл конфигурации с прописанной архитектурой автономного агента, режиссерскими правилами и форматами.",
    val_3_title: "Набор рабочих промптов для любого сайта/маркетплейса",
    val_3_desc: "Библиотека проверенных промптов: продуктовые ролики, кинематографичный сторителлинг, реклама одежды, техники и авто.",
    val_4_title: "Закрытый чат поддержки для участников",
    val_4_desc: "Прямой доступ к комьюнити единомышленников, разбор ваших роликов, помощь по настройке терминала и ответы на вопросы.",

    // Skill preview box
    skill_file_title: "Файл конфигурации скилла (SKILL.md preview)",
    skill_copy_btn: "Скопировать код",
    skill_copied: "Скопировано в буфер!",

    // CTA / Payment
    cta_badge: "СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ",
    cta_title: "Начни создавать ИИ-видео уже сегодня",
    cta_subtitle: "Безопасная сделка и моментальное получение через маркетплейс TAJSEL.",
    price_old: "$15",
    price_old_tjs: "165 сомони",
    price_current: "$5",
    price_current_tjs: "55 сомони",
    price_save: "Скидка 67%",
    cta_btn: "Купить курс на TAJSEL",
    guarantee_text: "Идемпотентность платежей, escrow-защита и поддержка 24/7",
    guarantee_sub: "После оплаты на маркетплейсе ссылка на обучающие материалы и файл скилла открывается мгновенно в личном кабинете.",
    direct_help_title: "Остались вопросы перед покупкой?",
    direct_help_action: "Написать автору в Telegram",

    // FAQ
    faq_badge: "FAQ",
    faq_title: "Часто задаваемые вопросы",
    faq_q1: "Нужен ли мощный компьютер или видеокарта?",
    faq_a1: "Нет! Все вычисления и генерации происходят на серверах ИИ в облаке. Вам подойдет даже слабый рабочий ноутбук или ПК с Windows, macOS или Linux.",
    faq_q2: "Сколько стоит использование Claude Code?",
    faq_a2: "При регистрации в Anthropic даются приветственные бесплатные кредиты, которых хватает на первые десятки роликов. Себестоимость одного видео через API составляет менее $0.05.",
    faq_q3: "Как я получу курс после оплаты на TAJSEL?",
    faq_a3: "Маркетплейс TAJSEL работает по системе моментальной цифровой доставки. Сразу после подтверждения оплаты файл курса, ссылки и доступ в закрытый чат будут доступны в вашем кабинете покупателя.",
    faq_q4: "Работают ли промпты на русском и таджикском языках?",
    faq_a4: "Да! Скилл Manus 2.0 полностью мультиязычен. Вы можете описывать задачу на русском или тоҷикӣ, и Claude Code самостоятельно преобразует ее в профессиональные кинематографические директивы.",

    // Modal
    modal_title: "Демонстрация ИИ-видео",
    modal_subtitle: "Пример ролика, сгенерированного за 1 минуту по технологии мини-курса",
    modal_meta_1: "Движок: Claude Code + Manus 2.0",
    modal_meta_2: "Формат: 4K 60FPS Вертикальное видео",
    modal_open_instagram: "Открыть видео в Instagram (Reels)",
    modal_close: "Закрыть",

    // Footer
    footer_desc: "Практический мини-курс по созданию кинематографичных ИИ-видео с помощью Claude Code и скилла Manus 2.0.",
    footer_links_title: "Навигация",
    footer_contacts_title: "Поддержка и сообщество",
    footer_rights: "Все права защищены. Образовательная платформа mcode в партнерстве с TAJSEL.",
    footer_tg_channel: "Telegram-канал MCode",
    footer_tg_support: "Личный чат автора (@vvewrix)",
    footer_tajsel_product: "Товар на TAJSEL"
  },

  tj: {
    // Nav
    nav_about: "Дар бораи курс",
    nav_curriculum: "Барнома",
    nav_audience: "Барои кӣ",
    nav_guarantees: "Кафолатҳо",
    nav_buy: "Хариди курс",

    // Hero
    hero_badge: "Формати нави видеои 2026",
    hero_title_prefix: "Видеоҳои кинематографиро дар 1 дақиқа бо ёрии AI ",
    hero_title_accent: "Claude Code созед",
    hero_subtitle: "Бе таҷрибаи монтаж, барномаҳои мураккаб ва наворбардорӣ. Мини-курси қадам ба қадам + маҳорати омодаи AI дар сабки Manus 2.0.",
    hero_btn_primary: "Гирифтани курс ва скилл",
    hero_btn_secondary: "Тамошои видеои демо",
    hero_mockup_terminal_title: "Терминали Claude Code — Коргардони мустақил",
    hero_mockup_cmd_1: "claude skill load manus-video-engine",
    hero_mockup_res_1: "Скилли Manus 2.0 фаъол шуд. Қоидаҳои кинематографияи 4K татбиқ гардиданд.",
    hero_mockup_cmd_2: "claude \"Барои маркетплейси TAJSEL промо-видеои 4K эҷод кун\"",
    hero_mockup_res_2: "Генератсияи саҳнаҳо... 6 саҳна бо ҳам пайваст • Рендери 60 FPS",
    hero_mockup_badge_live: "Видеои омода • 4K Ultra HD",
    hero_mockup_duration: "0:45 сония",
    hero_mockup_watch_reel: "Дар Instagram тамошо кунед",

    // Stats
    stat_1_num: "0",
    stat_1_label: "сония наворбардорӣ",
    stat_1_desc: "Бе камера, равшанӣ, штативҳо ва даҳҳо дублҳо.",
    stat_2_num: "1",
    stat_2_label: "промпт барои оғоз",
    stat_2_desc: "Claude Code тамоми раванди истеҳсоли видеоро иҷро мекунад.",
    stat_3_num: "4K",
    stat_3_label: "сифати Ultra HD",
    stat_3_desc: "Битрейти баланд, ҳаракати ҳамвори 60fps ва фотореализм.",
    stat_4_num: "100%",
    stat_4_label: "мустақилият",
    stat_4_desc: "Скилли Manus 2.0 дар ҳолати пурра худкор кор мекунад.",

    // AI Strip
    ai_strip_title: "Экосистема ва генераторҳои зеҳни сунъӣ:",

    // Curriculum
    curriculum_badge: "НАҚШАИ ҚАДАМ БА ҚАДАМ",
    curriculum_title: "Барномаи мини-курс: Аз сифр то 4K дар 3 қадам",
    curriculum_subtitle: "Маводи мушаххас бидуни суханони зиёдатӣ. Ҳар як қадам бо наворҳои амалӣ ва файлҳои конфигуратсия омода шудааст.",

    step_1_tag: "ҚАДАМИ 01",
    step_1_time: "Модули 1",
    step_1_title: "Насб ва танзими Claude Code",
    step_1_desc: "Шарҳи терминал, муҳити корӣ ва воридкунии калидҳо.",
    step_1_p1: "Насби Node.js ва CLI-и расмии Claude Code тавассути терминали ягона.",
    step_1_p2: "Нигоҳдории бехатари калидҳои API-и Anthropic бе хатари фош шудан.",
    step_1_p3: "Санҷиши коршоямии муҳит ва оғози нахустин дархости санҷишӣ.",

    step_2_tag: "ҚАДАМИ 02",
    step_2_time: "Модули 2",
    step_2_title: "Интегратсияи скилли Manus 2.0",
    step_2_desc: "Гузоштани файл дар .claude/skills, санҷиш тавассути /skills ва танзими қоидаҳо.",
    step_2_p1: "Ҷойгиркунии файли скилл дар папкаи системавии .claude/skills.",
    step_2_p2: "Санҷиши скилл дар CLI Claude Code бо фармони системавии /skills.",
    step_2_p3: "Танзими қоидаҳо: намуди линзаҳо (35mm/85mm), рӯшноӣ ва суръати ҳаракат.",

    step_3_tag: "ҚАДАМИ 03",
    step_3_time: "Модули 3",
    step_3_title: "Генератсия ва монетизатсия",
    step_3_desc: "Навиштани промптҳо бо русӣ/тоҷикӣ, рендеринг дар 4K ва оғози фурӯш.",
    step_3_p1: "Формулаи навиштани промптҳои фурӯшанда барои брендҳо ва маҳсулот.",
    step_3_p2: "Баланд бардоштани сифат то 4K 60FPS ва васл кардани садову овоз тавассути AI.",
    step_3_p3: "Роҳҳои пул кор кардан: фурӯши видеоҳо барои Instagram Reels, TikTok ва TAJSEL.",

    // Audience
    audience_badge: "БАРОИ КӢ",
    audience_title: "Курс ба кӣ моҳҳо вақту хароҷотро сарфа мекунад",
    audience_subtitle: "Ин технология ҳам барои сохтани видеои шахсӣ ва ҳам барои даромад аз хизматрасонӣ комил аст.",
    aud_1_title: "Эҷодкунандагони контент ва блогерҳо",
    aud_1_desc: "Видеоҳои пурбинандаи Reels ва TikTok-ро бе сабти рӯи худ ва бе хариди таҷҳизоти гаронарзиш созед.",
    aud_2_title: "Селлерҳо ва соҳибкорони маркетплейсҳо",
    aud_2_desc: "Барои молҳои худ дар TAJSEL, Wildberries ва мағозаҳои Instagram видеоҳои ҷолиб сохта, фурӯшро чанд баробар зиёд кунед.",
    aud_3_title: "Фрилансерҳо ва студияҳои дизайн",
    aud_3_desc: "Сохтани видеоҳои AI-ро ба муштариён бо арзиши аз $30 то $100 пешниҳод намоед, ки танҳо 5 дақиқа вақти шуморо мегирад.",
    aud_4_title: "Навкорон бе таҷрибаи монтаж",
    aud_4_desc: "Ба шумо донистани барномаҳои мураккаби монтаж лозим нест — Claude Code ҳама чизро мустақилона иҷро мекунад.",

    // Value / Deliverables
    value_badge: "МУНДАРИҶАИ БАСТ",
    value_title: "Шумо пас аз харид чиҳоро ба даст меоред",
    value_subtitle: "Маҷмӯи пурраи рақамӣ, ки барои ҳамеша бо навсозиҳои ройгон дар ихтиёри шумо мемонад.",
    val_1_title: "Дастрасии пурра ба дарсҳои видеоии мини-курс",
    val_1_desc: "Дарсҳои мукаммали HD бо намоиши экран: аз аввалин фармон дар терминал то видеои омода дар телефон.",
    val_2_title: "Файли омодаи скилли AI Manus 2.0 (SKILL.md)",
    val_2_desc: "Файли махсуси танзимот бо қоидаҳои коргардонии касбӣ ва форматҳои замонавии AI.",
    val_3_title: "Маҷмӯи промптҳои санҷидашуда барои сомонаҳо ва маркетплейсҳо",
    val_3_desc: "Китобхонаи промптҳои омода: рекламаи либос, техника, мошинҳо ва наворҳои кинематографӣ.",
    val_4_title: "Чати пӯшидаи дастгирӣ барои иштирокчиён",
    val_4_desc: "Алоқаи мустақим бо муаллиф, санҷиши видеоҳои шумо ва ҷавоб ба саволҳо дар муҳити дӯстона.",

    // Skill preview box
    skill_file_title: "Файли конфигуратсияи скилл (SKILL.md preview)",
    skill_copy_btn: "Нусхабардории код",
    skill_copied: "Нусхабардорӣ шуд!",

    // CTA / Payment
    cta_badge: "ПЕШНИҲОДИ МАХСУС",
    cta_title: "Эҷоди видеоҳои AI-ро имрӯз оғоз кунед",
    cta_subtitle: "Муомилоти бехатар ва дастрасии фаврӣ тавассути маркетплейси TAJSEL.",
    price_old: "165 сомонӣ",
    price_old_tjs: "165 сомонӣ",
    price_current: "55 сомонӣ",
    price_current_tjs: "55 сомонӣ",
    price_save: "Тахфифи 67%",
    cta_btn: "Хариди курс дар TAJSEL (55 TJS)",
    guarantee_text: "Идемпотентнокии пардохтҳо, escrow-ҳимоя ва дастгирии 24/7",
    guarantee_sub: "Пас аз пардохт дар маркетплейс пайванди дарсҳо ва файли скилл дарҳол дар утоқи шахсии шумо кушода мешавад.",
    direct_help_title: "Пеш аз харид савол доред?",
    direct_help_action: "Ба муаллиф дар Telegram нависед",

    // FAQ
    faq_badge: "САВОЛ ВА ҶАВОБ",
    faq_title: "Саволҳои зиёд такроршаванда",
    faq_q1: "Оё компютери пурқувват лозим аст?",
    faq_a1: "Не! Ҳамаи равандҳо дар серверҳои абрии зеҳни сунъӣ сурат мегиранд. Ҳатто компютер ё ноутбуки оддӣ кифоя аст.",
    faq_q2: "Истифодаи Claude Code чӣ қадар арзиш дорад?",
    faq_a2: "Ҳангоми сабти ном ба шумо кредитҳои ройгон дода мешаванд, ки барои даҳҳо видео кофӣ мебошанд. Баъдан арзиши як видео камтар аз $0.05 мебошад.",
    faq_q3: "Пас аз пардохт курсро чӣ гуна мегирам?",
    faq_a3: "Маркетплейси TAJSEL бо системаи расонидани фаврии рақамӣ кор мекунад. Дарҳол пас аз пардохт мавод дар саҳифаи харидори шумо фаъол мешавад.",
    faq_q4: "Оё бо забони тоҷикӣ кор кардан мумкин аст?",
    faq_a4: "Бале! Скилли Manus 2.0 забонҳои тоҷикӣ ва русиро пурра мефаҳмад ва дархости шуморо ба коргардонии дараҷаи ҷаҳонӣ табдил медиҳад.",

    // Modal
    modal_title: "Намоиши видеои AI",
    modal_subtitle: "Намунаи видеое, ки дар 1 дақиқа бо технологияи мини-курс сохта шудааст",
    modal_meta_1: "Муҳаррик: Claude Code + Manus 2.0",
    modal_meta_2: "Формат: 4K 60FPS Видеои амудӣ",
    modal_open_instagram: "Дар Instagram тамошо кунед (Reels)",
    modal_close: "Пӯшидан",

    // Footer
    footer_desc: "Мини-курси амалӣ оид ба эҷоди видеоҳои кинематографии AI бо Claude Code ва скилли Manus 2.0.",
    footer_links_title: "Бахшҳо",
    footer_contacts_title: "Дастгирӣ ва ҷомеа",
    footer_rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд. Платформаи mcode дар ҳамкорӣ бо TAJSEL.",
    footer_tg_channel: "Канали Telegram-и MCode",
    footer_tg_support: "Чати муаллиф (@vvewrix)",
    footer_tajsel_product: "Маҳсулот дар TAJSEL"
  },

  en: {
    // Nav
    nav_about: "About",
    nav_curriculum: "Curriculum",
    nav_audience: "Audience",
    nav_guarantees: "Guarantees",
    nav_buy: "Buy Course",

    // Hero
    hero_badge: "Next-Gen AI Video Format 2026",
    hero_title_prefix: "Create Cinematic Videos in 1 Minute with AI ",
    hero_title_accent: "Claude Code",
    hero_subtitle: "Zero editing experience, no complex software or filming required. Step-by-step mini-course + ready Manus 2.0 style AI skill.",
    hero_btn_primary: "Get Course & Skill",
    hero_btn_secondary: "Watch Demo Video",
    hero_mockup_terminal_title: "Claude Code CLI — Autonomous Director Engine",
    hero_mockup_cmd_1: "claude skill load manus-video-engine",
    hero_mockup_res_1: "Manus 2.0 skill initialized. 4K cinematic rules applied.",
    hero_mockup_cmd_2: "claude \"Produce a 4K commercial reel for TAJSEL marketplace\"",
    hero_mockup_res_2: "Generating storyboard... 6 scenes synchronized • 60 FPS render",
    hero_mockup_badge_live: "Render Ready • 4K Ultra HD",
    hero_mockup_duration: "0:45 sec",
    hero_mockup_watch_reel: "Watch on Instagram",

    // Stats
    stat_1_num: "0",
    stat_1_label: "seconds filming",
    stat_1_desc: "No physical cameras, studio lighting, or endless retakes.",
    stat_2_num: "1",
    stat_2_label: "prompt to launch",
    stat_2_desc: "Claude Code manages the entire cinematic production pipeline.",
    stat_3_num: "4K",
    stat_3_label: "Ultra HD quality",
    stat_3_desc: "Cinematic bitrate, buttery-smooth 60fps and photorealism.",
    stat_4_num: "100%",
    stat_4_label: "autonomy",
    stat_4_desc: "Turnkey Manus 2.0 skill directs scenes on complete autopilot.",

    // AI Strip
    ai_strip_title: "Supported ecosystem & generative AI engines:",

    // Curriculum
    curriculum_badge: "STEP-BY-STEP BLUEPRINT",
    curriculum_title: "Mini-Course Program: From Scratch to 4K in 3 Steps",
    curriculum_subtitle: "High-density practical lessons with zero fluff. Every step includes terminal screencasts and configuration files.",

    step_1_tag: "STEP 01",
    step_1_time: "Module 1",
    step_1_title: "Installing & Configuring Claude Code",
    step_1_desc: "Terminal setup, environment configuration, and API key loading.",
    step_1_p1: "Installing Node.js and the official Claude Code CLI in one simple command.",
    step_1_p2: "Securely configuring Anthropic API keys without accidental exposure.",
    step_1_p3: "Verifying your local setup and executing your first baseline interaction.",

    step_2_tag: "STEP 02",
    step_2_time: "Module 2",
    step_2_title: "Manus 2.0 Skill Integration",
    step_2_desc: "Placing into .claude/skills, verification via /skills, and rule tuning.",
    step_2_p1: "Unpacking the skill architecture into your system .claude/skills directory.",
    step_2_p2: "Verifying skill registration inside Claude Code with the /skills command.",
    step_2_p3: "Fine-tuning directorial rules: lens optics (35mm/85mm), lighting, and pacing.",

    step_3_tag: "STEP 03",
    step_3_time: "Module 3",
    step_3_title: "Generation & Monetization",
    step_3_desc: "Prompt engineering in Russian/Tajik/English, 4K render, and client sales.",
    step_3_p1: "Writing high-converting commercial prompts for real brands and products.",
    step_3_p2: "Upscaling to crisp 4K 60FPS and synchronizing AI audio and sound effects.",
    step_3_p3: "Monetization playbooks: selling viral reels for Instagram, TikTok & TAJSEL.",

    // Audience
    audience_badge: "WHO IS THIS FOR",
    audience_title: "Who Will Benefit Most From This Mini-Course",
    audience_subtitle: "A proven framework for personal brand growth or launching an AI creative agency.",
    aud_1_title: "Content Creators & Bloggers",
    aud_1_desc: "Produce viral Reels, Shorts, and TikToks without showing your face or investing in expensive cameras and studio lighting.",
    aud_2_title: "E-Commerce & Marketplace Sellers",
    aud_2_desc: "Create high-converting video listings for TAJSEL, Amazon, and Instagram Stores to skyrocket customer conversion rates.",
    aud_3_title: "Freelancers & Digital Agencies",
    aud_3_desc: "Offer AI video production to clients for $30-$100 per video with under 5 minutes of effort and cents in API costs.",
    aud_4_title: "Beginners with Zero Editing Skills",
    aud_4_desc: "No need to learn complicated Premiere Pro or After Effects — Claude Code writes and edits scenes autonomously.",

    // Value / Deliverables
    value_badge: "PACKAGE CONTENTS",
    value_title: "What You Receive Immediately Upon Purchase",
    value_subtitle: "A complete digital asset bundle with lifetime access and free updates.",
    val_1_title: "Full Mini-Course Video Access",
    val_1_desc: "HD step-by-step screencast lessons: from initial terminal launch to the final export in your camera roll.",
    val_2_title: "Ready Manus 2.0 AI Skill (SKILL.md)",
    val_2_desc: "Production-ready configuration file with autonomous director rules, camera physics, and prompt rules.",
    val_3_title: "High-Converting Prompt Pack for Brands & E-commerce",
    val_3_desc: "Curated prompt library: product ads, luxury aesthetics, cinematic storytelling, and fashion reels.",
    val_4_title: "Private Member Community Access",
    val_4_desc: "Direct support channel, peer community, personalized feedback on your reels, and troubleshooting.",

    // Skill preview box
    skill_file_title: "Skill Configuration (SKILL.md preview)",
    skill_copy_btn: "Copy Code",
    skill_copied: "Copied to clipboard!",

    // CTA / Payment
    cta_badge: "SPECIAL LAUNCH OFFER",
    cta_title: "Start Creating AI Videos Today",
    cta_subtitle: "Secure checkout and instant digital delivery via TAJSEL marketplace.",
    price_old: "$15",
    price_old_tjs: "165 TJS",
    price_current: "$5",
    price_current_tjs: "55 TJS",
    price_save: "Save 67%",
    cta_btn: "Buy Course on TAJSEL ($5)",
    guarantee_text: "Payment idempotency, escrow buyer protection & 24/7 support",
    guarantee_sub: "Instant delivery: video materials and skill file are unlocked immediately in your TAJSEL dashboard.",
    direct_help_title: "Have questions before buying?",
    direct_help_action: "Message Author on Telegram",

    // FAQ
    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Do I need a high-end graphics card or PC?",
    faq_a1: "No! All AI computations and rendering take place in the cloud. Any standard laptop or desktop with Windows, macOS, or Linux works smoothly.",
    faq_q2: "How much does Claude Code API cost?",
    faq_a2: "New Anthropic accounts receive free starting credits. Each commercial video generation typically costs less than $0.05 in API usage.",
    faq_q3: "How will I receive the course after purchasing on TAJSEL?",
    faq_a3: "TAJSEL is an instant digital delivery marketplace. Once your payment is confirmed, download links and community invites appear directly in your dashboard.",
    faq_q4: "Can I prompt in Russian or Tajik?",
    faq_a4: "Yes! The Manus 2.0 skill natively interprets Russian, Tajik, and English prompts, translating your intent into professional cinematography instructions.",

    // Modal
    modal_title: "AI Video Demonstration",
    modal_subtitle: "Sample commercial reel produced in 1 minute using the mini-course workflow",
    modal_meta_1: "Engine: Claude Code + Manus 2.0",
    modal_meta_2: "Format: 4K 60FPS Vertical Reel",
    modal_open_instagram: "Watch on Instagram (Reels)",
    modal_close: "Close",

    // Footer
    footer_desc: "Hands-on mini-course on creating cinematic AI videos using Claude Code and the Manus 2.0 skill.",
    footer_links_title: "Navigation",
    footer_contacts_title: "Support & Community",
    footer_rights: "All rights reserved. mcode educational platform in partnership with TAJSEL.",
    footer_tg_channel: "Telegram Channel MCode",
    footer_tg_support: "Direct Author Chat (@vvewrix)",
    footer_tajsel_product: "Product on TAJSEL"
  }
};

let currentLang = 'ru';

function initI18n() {
  // Check stored language or browser language
  const savedLang = localStorage.getItem('mcode_lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }

  // Setup language switcher triggers
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = btn.getAttribute('data-lang-btn');
      if (translations[selectedLang]) {
        setLanguage(selectedLang);
      }
    });
  });

  applyTranslations(currentLang);
  updateActiveLangUI(currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('mcode_lang', lang);
  applyTranslations(lang);
  updateActiveLangUI(lang);
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Update document title
  if (lang === 'tj') {
    document.title = "Мини-курси видеои AI бо Claude Code & Manus 2.0 | mcode";
  } else if (lang === 'en') {
    document.title = "AI Video Mini-Course with Claude Code & Manus 2.0 | mcode";
  } else {
    document.title = "Мини-курс по созданию ИИ-видео с Claude Code & Manus 2.0 | mcode";
  }

  // Translate all elements with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Dynamic price adjustment based on language
  const priceOldEl = document.getElementById('priceOldDisplay');
  const priceCurrentEl = document.getElementById('priceCurrentDisplay');
  const ctaBtnText = document.getElementById('ctaBtnText');

  if (priceOldEl && priceCurrentEl) {
    if (lang === 'tj') {
      priceOldEl.textContent = dict.price_old_tjs || "165 TJS";
      priceCurrentEl.textContent = dict.price_current_tjs || "55 TJS";
    } else {
      priceOldEl.textContent = dict.price_old || "$15";
      priceCurrentEl.textContent = dict.price_current || "$5";
    }
  }

  if (ctaBtnText) {
    ctaBtnText.textContent = dict.cta_btn;
  }
}

function updateActiveLangUI(lang) {
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.classList.add('bg-white/15', 'text-white', 'border-cyan-400/40');
      btn.classList.remove('text-slate-400', 'border-transparent');
    } else {
      btn.classList.remove('bg-white/15', 'text-white', 'border-cyan-400/40');
      btn.classList.add('text-slate-400', 'border-transparent');
    }
  });

  // Also update active flag indicator if present
  const currentFlagImg = document.getElementById('currentLangFlag');
  if (currentFlagImg) {
    if (lang === 'tj') {
      currentFlagImg.src = 'assets/icons/flags/tj.svg';
      currentFlagImg.alt = 'TJ';
    } else if (lang === 'en') {
      currentFlagImg.src = 'assets/icons/flags/us.svg';
      currentFlagImg.alt = 'EN';
    } else {
      currentFlagImg.src = 'assets/icons/flags/ru.svg';
      currentFlagImg.alt = 'RU';
    }
  }

  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    currentLangLabel.textContent = lang.toUpperCase();
  }
}

/* ==========================================================================
   Video Demo Modal Engine
   ========================================================================== */

function initVideoModal() {
  const modalBackdrop = document.getElementById('videoDemoModal');
  const openButtons = document.querySelectorAll('[data-open-demo]');
  const closeButtons = document.querySelectorAll('[data-close-demo]');

  if (!modalBackdrop) return;

  function openModal() {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  // Close on backdrop click
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Mobile Menu Engine
   ========================================================================== */

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenuDropdown');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   Code Copy Engine
   ========================================================================== */

function initCopyActions() {
  const copyBtn = document.getElementById('copySkillCodeBtn');
  const codeBlock = document.getElementById('skillCodeSnippet');
  const toast = document.getElementById('copyToast');

  if (!copyBtn || !codeBlock) return;

  copyBtn.addEventListener('click', () => {
    const textToCopy = codeBlock.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast();
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = textToCopy;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast();
    });
  });

  function showToast() {
    if (!toast) return;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none');
      toast.classList.remove('opacity-100');
    }, 2400);
  }
}

/* ==========================================================================
   Spotlight Cursor Effect
   ========================================================================== */

function initSpotlightGlow() {
  const spotlightCards = document.querySelectorAll('.glow-card-spotlight');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   Smooth Scrolling for Anchors
   ========================================================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
