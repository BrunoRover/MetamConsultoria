const useFormValidation = (formRef, course, showToast) => {
    const validateForm = () => {
        if (!formRef.current) {
            console.error("Formulário ainda não está disponível");
            return false;
        }

        const form = formRef.current;
        const nome = form.nome.value;
        const cpf = form.cpf.value;
        const whatsapp = form.whatsapp.value;
        const email = form.email.value;
        const cidade = form.cidade.value;
        const profissao = form.profissao.value;
        const atividade = form.atividade?.value;

        if (!nome || !cpf || !whatsapp || !email || !cidade || !profissao) {
            showToast("Por favor, preencha todos os campos obrigatórios.", "error");
            return false;
        }

        const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfPattern.test(cpf)) {
            showToast("CPF inválido. Use o formato xxx.xxx.xxx-xx.", "error");
            return false;
        }

        const whatsappPattern = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!whatsappPattern.test(whatsapp)) {
            showToast("Número de WhatsApp inválido. Use o formato (xx) xxxxx-xxxx.", "error");
            return false;
        }

        if (course.title === "Aeromédico" && (atividade === "medico" && !form.crm.value) ||
            (atividade === "enfermeiro" && !form.coren.value)) {
            showToast("Por favor, preencha o número do CRM ou COREN.", "error");
            return false;
        }

        return true;
    };

    return { validateForm };
};

export default useFormValidation;