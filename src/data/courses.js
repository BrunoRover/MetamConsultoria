import logometam from '../assets/images/logometam.png';
import drone from '../assets/images/logoDrone.png';
import aeromedico from '../assets/images/aeromedico.png';
import dronePage1 from '../assets/images/dronePage1.jpg';
import dronePage2 from '../assets/images/dronePage2.jpg';
import dronePage3 from '../assets/images/dronePage3.jpg';
import aeromedico1 from '../assets/images/aeromedico.jpg';
import aeromedico2 from '../assets/images/aeromedico1.jpg';
import aeromedico3 from '../assets/images/aeromedico2.jpg';
import comissario from '../assets/images/comissários.png';
import comissario1 from '../assets/images/comissário1.jpg';
import comissario2 from '../assets/images/comissário2.jpg';
import comissario3 from '../assets/images/comissário3.jpg';
import sco from '../assets/images/sco1.jpg';
import sco1 from '../assets/images/sco2.jpg';
import sco2 from '../assets/images/sco3.jpg';
import sco3 from '../assets/images/sco4.jpg';
import pinho from '../assets/images/Pinho.jpg';
import carvalho from '../assets/images/Carvalho.jpg';
import wilian from '../assets/images/Wilian.jpg';
import docCoser from '../assets/images/DocCoser.png';
import moura from '../assets/images/Moura.jpeg';
import max from '../assets/images/Max.jpeg';

const coursesData = [
    {
        title: "Pilotagem de Drone",
        description: "Torne-se um piloto de drone certificado com um curso completo e atualizado, baseado nas legislações da ANAC, Anatel e Aeronáutica.",
        details: "Nos dias 12 e 13 de abril de 2025, em Chapecó - SC, oferecemos um curso presencial completo com 20 horas de carga horária, ideal para quem deseja aprimorar seus conhecimentos e habilidades no mundo da aviação. Durante o curso, você terá a oportunidade de aprender desde a teoria de voo, passando pela manutenção de aeronaves, até técnicas avançadas de pilotagem e práticas de segurança operacional. Nossos instrutores altamente qualificados, com vasta experiência na área, garantirão uma formação sólida e de alta qualidade.",
        duration: "20h presenciais",
        level: "Iniciante a Avançado",
        category: "Treinamento Técnico",
        modality: "Presencial",
        certification: "Sim, certificação oficial reconhecida",
        price: "R$ 900,00",
        promotionalPrice: "R$ 750,00",
        instructor: [
            {
                name: "Moura",
                bio: "Coordenador Geral e Instrutor do Curso",
                cod: "Código ANAC PPH 491666",
                image: moura
            }                       
        ],
        startDates: ["12/04/2025"],
        location: "Chapecó - SC",
        prerequisites: ["Nenhum para iniciantes", "Recomenda-se experiência para nível avançado"],
        targetAudience: "Profissionais da área, estudantes ou interessados no tema",
        teachingMaterial: "Será fornecido material impresso e digital ",
        schedule: [
            {
                dia: "12/04",
                tipo: "AULA TEÓRICA",
                descricao: "Início às 8h, término às 17h30 Chapecó - SC",
                intervalo: "Intervalo de 1h para almoço",
                right: "No dia 12 de abril, o curso terá início às 8h, com uma pausa para café de 15 minutos, a parte da manhã será encerrada às 12h para o almoço, e o retorno está previsto para as 13h30, estendendo-se até as 17h. Nesse dia, os participantes receberão aulas sobre a legislação de operações com drones, segurança no uso de drones e cadastros, conforme as determinações dos órgãos responsáveis.",
            },
            {
                dia: "13/04",
                tipo: "AULA PRÁTICA",
                descricao: "Início às 8h, término às 17h30 Chapecó - SC ",
                intervalo: "Intervalo de 1h para almoço",
                right: "No dia 13 de abril, o curso terá início às 8h, com uma pausa para café de 15 minutos, a parte da manhã será encerrada às 12h para o almoço, e o retorno está previsto para as 13h30, estendendo-se até as 17h. Nesse dia, os participantes receberão aulas práticas de operações com drones, e avaliação teórica e prática, após concluir receberão a certificação.",
            }
        ],
        whyChoose: [
            "Nosso curso segue as regulamentações da ANAC, Anatel e Aeronáutica, garantindo total conformidade com as normas do setor. Com instrutores experientes em segurança pública e emergências, oferecemos um ensino de alta qualidade. Além disso, nosso certificado é amplamente reconhecido no mercado, e as aulas práticas proporcionam um aprendizado completo e eficaz."
        ],
        faqs: [
            { question: "O curso é reconhecido pela ANAC?", answer: "Sim, seguimos todas as normas vigentes da ANAC." },
            { question: "Preciso ter experiência prévia?", answer: "Não, o curso atende desde iniciantes até profissionais." },
            { question: "Preciso levar meu próprio drone?", answer: "Não, forneceremos os equipamentos necessários para o treinamento." }
        ],
        testimonials: [
            { name: "Carla Mendes", comment: "O curso de Aeromédico foi essencial para minha carreira. Aprendi técnicas valiosas em simulações realistas." },
            { name: "Roberto Souza", comment: "Excelente conteúdo e instrutores experientes. Recomendo para todos da área da saúde." },
            { name: "Juliana Alves", comment: "Um curso completo e prático. As simulações fizeram toda a diferença no aprendizado." }
        ],
        image: drone,
        imagePage: [dronePage1, dronePage2, dronePage3],
        link: "/curso/drone",
        buttonText: "Quero me inscrever",
        phoneMesage: "Olá! Gostaria de saber mais informações sobre o curso de Pilotagem de Drone.",
        notDefined: false
    },   
    {
        title: "Aeromédico",
        description: "Curso especializado em transporte aeromédico, focado na capacitação de profissionais para atuar com segurança e eficiência em situações de emergência no transporte aéreo.",
        details: "Este treinamento proporciona conhecimento sobre protocolos médicos em voos, estratégias para evacuação aeromédica, técnicas de suporte básico e avançado de vida em aeronaves e procedimentos para situações críticas. Indicado para profissionais da saúde, pilotos e equipes de resgate. As aulas práticas em simuladores garantem uma experiência realista.",
        duration: "60h presenciais",
        level: "Intermediário",
        category: "Resgate e Emergência",
        modality: "Híbrido",
        certification: "Sim, conforme as diretrizes do ICAO ",
        price: "R$ 4.500,00",
        promotionalPrice: "R$ 4.000,00",
        instructor: [
            {
                name: "Doc. Coser",
                bio: "Coordenador Médico e Instrutor do Curso",
                image: docCoser
            },
            {
                name: "Moura",
                bio: "Coordenador Geral e Instrutor do Curso",
                image: moura
            },
            {
                name: "Carvalho",
                bio: "Bombeiro do RS e Instrutor Aquático",
                image: carvalho
            },
            {
                name: "Wilian",
                bio: "Bombeiro de SC e Instrutor Altura",
                image: wilian
            },
        ],
        startDates: ["10/04/2025"],
        location: "Bento Gonçalves - RS",
        prerequisites: ["Formação na área da saúde ou experiência em resgates"],
        targetAudience: "Profissionais da área, médico, enfermeiro ou fisioterapeuta",
        teachingMaterial: "Será fornecido material impresso e digital ",
        schedule: [
            {
                dia: "10/04",
                tipo: "AULA TEÓRICA",
                descricao: "Início às 8h, término às 17h30 Aeroclube Bento Gonçalves",
                intervalo: "Intervalo de 1h para almoço",
                right: "No dia 10 de abril, terá início o curso com a parte teórica, que abordará as demandas e conhecimentos essenciais para o profissional aeromédico. ",
            },
            {
                dia: "11/04",
                tipo: "AULA TEÓRICA",
                descricao: "Início às 8h, término às 17h30 Aeroclube Bento Gonçalves ",
                intervalo: "Intervalo de 1h para almoço",
                right: "Essa parte teórica se estenderá até o dia 11 de abril e incluirá momentos de Coffee break e pausa para o almoço. O curso será realizado no Aero Clube de Bento Gonçalves, começando às 8h e finalizando às 17h30. ",
            },
            {
                dia: "12/04",
                tipo: "AULA PRÁTICA - TRA",
                descricao: "Treinamento Resistência Aquática Início às 8h, término às 12h",
                right: "No dia 12 de abril, às 8h, terá início a parte prática do curso, com foco no Módulo de Treinamento de Resistência Aquática, que abordará os requisitos estipulados pela ANAC.  Durante essa etapa, os participantes terão a oportunidade de interagir com a água em um ambiente controlado, aprendendo técnicas de salvamento eficazes em situações de incidentes aéreos. ",
            },
            {
                dia: "13/04",
                tipo: "AULA PRÁTICA - TRO",
                descricao: "Treinamento Resistência Operacional Início às 14h do dia 12 e término 11h do dia 13",
                right: "Em seguida, os participantes iniciarão o Módulo de Treinamento de Resistência Operacional, onde serão instruídos em técnicas de rapel em vão livre e locomoção em áreas remotas. Este módulo se estenderá até o dia 13 de abril, às 11h.",
            },
            {
                dia: "25/04",
                tipo: "AULA PRÁTICA",
                descricao: "Início às 8h, término às 15h Aeroclube Bento Gonçalves",
                right: "No dia 25 de abril com inicio as 8h no Aero Clube de Bento Gonçalves será realizado o módulo prático com uso de aeronave rotativa, concluindo assim o cronograma do curso, com o encerramento e entrega da certificação dos novos Operadores Aeromédico.",
            },
        ],
        whyChoose: [
            "Treinamento prático baseado em cases reais de grandes operações, proporcionando aprendizado aplicável no dia a dia; Desenvolvimento de habilidades essenciais para uma liderança eficaz em situações desafiadoras; Aulas ministradas por especialistas renomados em segurança e gerenciamento de crises; e certificação reconhecida que agrega valor substancial ao seu currículo e impulsiona sua carreira."
        ],
        faqs: [
            { question: "O curso tem carga horária prática?", answer: "Sim, inclui treinamento prático com uso de aeronave rotativa." },
            { question: "Preciso ser piloto para fazer o curso?", answer: "Não, mas é necessário ser médico, enfermeiro ou fisioterapeuta" },
            { question: "O certificado é válido internacionalmente?", answer: "Sim, o curso segue padrões reconhecidos globalmente." }
        ],
        testimonials: [
            { name: "Carla Mendes", comment: "O curso de Aeromédico foi essencial para minha carreira. Aprendi técnicas valiosas em simulações realistas." },
            { name: "Roberto Souza", comment: "Excelente conteúdo e instrutores experientes. Recomendo para todos da área da saúde." },
            { name: "Juliana Alves", comment: "Um curso completo e prático. As simulações fizeram toda a diferença no aprendizado." }
        ],
        image: aeromedico,
        imagePage: [aeromedico1, aeromedico2, aeromedico3],
        link: "/curso/aeromedico",
        buttonText: "Quero me inscrever",
        phoneMesage: "Olá! Gostaria de saber mais informações sobre o curso de Aeromédicos.",
        notDefined: false
    },
    {
        title: "Sistema de Comando de Operações (SCo)",
        description: "Capacitação na gestão estratégica de operações em cenários críticos e emergenciais, ideal para líderes e gestores de operações.",
        details: "Este curso prepara você para coordenar equipes em situações de crise, com foco em decisões rápidas e eficazes. Além da teoria sobre gestão de operações em tempo real, inclui simulações de grandes desastres, eventos públicos e operações militares.",
        duration: "40h presenciais",
        level: "Iniciante ao avançado",
        category: "Gerenciamento de Crises",
        modality: "Presencial",
        certification: "Sim, certificação oficial reconhecida",
        price: "R$ 700,00",
        promotionalPrice: "R$ 575,00",
        instructor: [
            {
                name: "Moura",
                bio: "Coordenador Geral e Instrutor do Curso",
                image: moura
            }
        ],
        startDates: ["Data não definida"],
        location: "Local não definido",
        prerequisites: ["Experiência em gestão de operações ou segurança"],
        targetAudience: "Corpo de Bombeiros, Polícia Militar, Defesa Civil, Forças Armadas",
        teachingMaterial: "Será fornecido material impresso e digital ",
        schedule: [],
        whyChoose: [
            "Treinamento baseado em cases reais de grandes operações, proporcionando aprendizado prático; Desenvolvimento de habilidades essenciais para liderança eficaz em situações desafiadoras; Aulas conduzidas por especialistas renomados em segurança e gerenciamento de crises e certificação reconhecida que agrega valor significativo ao seu currículo e carreira."
        ],
        faqs: [
            { question: "Este curso é indicado para iniciantes?", answer: "Sim, o curso atende desde iniciantes até profissionais." },
            { question: "A certificação tem validade?", answer: "Sim, é válida em todo o território nacional e reconhecida em diversos setores." }
        ],
        testimonials: [
            { name: "Carla Mendes", comment: "O curso de Aeromédico foi essencial para minha carreira. Aprendi técnicas valiosas em simulações realistas." },
            { name: "Roberto Souza", comment: "Excelente conteúdo e instrutores experientes. Recomendo para todos da área da saúde." },
            { name: "Juliana Alves", comment: "Um curso completo e prático. As simulações fizeram toda a diferença no aprendizado." }
        ],
        image: logometam,
        imagePage: [sco, sco1, sco2, sco3], 
        link: "/curso/sco",
        buttonText: "Quero me inscrever",
        phoneMesage: "Olá! Gostaria de saber mais informações sobre o curso de Sistema de Comando de Operações (SCo).",
        notDefined: false
    },
    {
        title: "Sobrevivência para Comissários de Bordo",
        description: "Curso intensivo e prático para capacitar comissários de bordo a lidarem com emergências a bordo, seguindo as normas da ANAC (RBACs 63 e 121).",
        details: "Este curso presencial atende rigorosamente às exigências da ANAC (RBACs 63 e 121), preparando você para atuar com segurança em situações de emergência a bordo. Com uma abordagem realista e dinâmica, nossos instrutores experientes ensinarão técnicas fundamentais de segurança, evacuação e primeiros socorros, garantindo um treinamento completo e eficaz.",
        duration: "40 horas presenciais",
        level: "Iniciante ao Avançado",
        category: "Segurança e Sobrevivência para Comissários",
        modality: "Presencial",
        certification: "Sim, certificação oficial reconhecida nacionalmente",
        price: "R$ 1.000,00",
        promotionalPrice: "R$ 900,00",
        instructor: [
            {
                name: "Moura",
                bio: "Coordenador Geral e Instrutor do Curso, especialista em segurança operacional e gerenciamento de crises.",
                image: moura
            }
        ],
        startDates: ["04/06/2025"],
        location: "Tijucas - SC",
        prerequisites: ["Experiência em gestão de operações ou segurança"],
        targetAudience: "Comissários de bordo, Corpo de Bombeiros, Polícia Militar, Defesa Civil, Forças Armadas e profissionais da aviação.",
        teachingMaterial: "Material didático impresso e digital incluso",
        schedule: [
            {
                dia: "04/06",
                tipo: "AULA TEÓRICA",
                descricao: "Início às 8h, término às 17h30 - Tijucas - SC",
                intervalo: "Intervalo de 1h para almoço",
                right: "No primeiro dia do curso, os participantes terão uma introdução teórica sobre segurança e sobrevivência a bordo, cobrindo normas da ANAC (RBACs 63 e 121), procedimentos de evacuação e uso de equipamentos de emergência.",
            },
            {
                dia: "05/06",
                tipo: "AULA TEÓRICA",
                descricao: "Início às 8h, término às 17h30 - Tijucas - SC",
                intervalo: "Intervalo de 1h para almoço",
                right: "A parte teórica continua no segundo dia, abordando primeiros socorros, combate a incêndios a bordo e gerenciamento de crises. O conteúdo será reforçado com estudos de caso e simulações em ambiente controlado.",
            },
            {
                dia: "06/06",
                tipo: "AULA PRÁTICA - TREINAMENTO EM ÁGUA",
                descricao: "Treinamento de Sobrevivência Aquática",
                intervalo: "Início às 8h, término às 12h",
                right: "No último dia do curso, os participantes realizarão um treinamento prático de sobrevivência aquática, incluindo técnicas de flutuação, uso correto de coletes salva-vidas e resgate em situações de emergência aérea.",
            }
        ],
        
        whyChoose: [
            "Treinamento baseado em casos reais de grandes operações, proporcionando aprendizado prático. ",
            "Desenvolvimento de habilidades essenciais para liderança eficaz em situações desafiadoras. ",
            "Aulas conduzidas por especialistas renomados em segurança e gerenciamento de crises. ",
            "Certificação reconhecida que agrega valor significativo ao seu currículo e carreira. "
        ],
        faqs: [
            {
                question: "O curso é reconhecido pela ANAC?",
                answer: "Sim, o curso segue as exigências da ANAC (RBACs 63 e 121), garantindo qualidade e conformidade com as normas da aviação."
            },
            {
                question: "Há suporte pós-curso?",
                answer: "Sim, oferecemos suporte para dúvidas e orientações sobre certificação e oportunidades na área."
            },
            {
                question: "Posso parcelar o valor do curso?",
                answer: "Sim, aceitamos pagamento parcelado no cartão de crédito. Consulte as condições no momento da inscrição."
            }
        ],
        testimonials: [
            {
                name: "Carla Mendes",
                comment: "O curso foi essencial para minha carreira. As simulações realistas me ajudaram a me sentir mais preparada."
            },
            {
                name: "Roberto Souza",
                comment: "Excelente conteúdo e instrutores altamente capacitados. Recomendo a todos da área."
            },
            {
                name: "Juliana Alves",
                comment: "Um curso completo e dinâmico. As simulações foram o ponto alto do aprendizado."
            }
        ],
        image: comissario,
        imagePage: [comissario1, comissario2, comissario3],
        link: "/curso/comissario",
        buttonText: "Quero me inscrever",
        phoneMessage: "Olá! Gostaria de saber mais informações sobre o curso de Sobrevivência para Comissários de Bordo.",
        notDefined: false
    }
    
];

export default coursesData;
