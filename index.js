function calculoIMC() {
    let massa = document.getElementById("Massa").value
    massa = parseFloat(massa)
    let altura = document.getElementById("Altura").value
    altura = parseFloat(altura)
    const IMC = Math.round(massa / (altura * altura))

    if (IMC <= 18.5) {
        document.querySelector("p#IMC").innerHTML = `O seu IMC vale aproximadamente ${IMC} \n Estar abaixo do peso pode ser tão prejudicial quanto estar acima dele. É importante garantir que você está recebendo nutrientes adequados para manter a saúde e a energia. Tente incorporar uma variedade de alimentos saudáveis em sua dieta, incluindo proteínas, carboidratos complexos, gorduras saudáveis, vitaminas e minerais. Considerar a ajuda de um nutricionista pode ser uma boa ideia para criar um plano alimentar adequado às suas necessidades. Além disso, praticar exercícios de fortalecimento muscular pode ajudar a aumentar a massa corporal de forma saudável.`
    } else if (IMC > 18.5 && IMC <= 24.9) { document.querySelector("p#IMC").innerHTML = `O seu IMC vale aproximadamente ${IMC}. \n Estar com um peso considerado normal é um ótimo sinal de que você está no caminho certo para uma vida saudável. Continue mantendo um estilo de vida equilibrado, com uma dieta rica em nutrientes e atividade física regular. Procure evitar alimentos processados e açúcares em excesso, e lembre-se de manter-se hidratado. Manter uma rotina de exames médicos periódicos também é essencial para garantir que tudo está indo bem com sua saúde.` } else if (IMC > 24.9 && IMC <= 29.9) { document.querySelector("p#IMC").innerHTML = `O seu IMC vale aproximadamente ${IMC}. \n Estar acima do peso ideal pode aumentar o risco de várias condições de saúde, como doenças cardíacas, diabetes tipo 2 e hipertensão. É importante adotar hábitos saudáveis, como uma dieta equilibrada e a prática regular de exercícios. Pequenas mudanças no seu estilo de vida, como reduzir a ingestão de alimentos processados e açucarados e aumentar a ingestão de frutas, vegetais e grãos integrais, podem fazer uma grande diferença. A consulta com um nutricionista ou médico pode fornecer um plano personalizado para ajudar você a alcançar um peso saudável.` } else if (IMC > 29.9 && IMC < 34.9) { document.querySelector("p#IMC").innerHTML = `O seu IMC vale aproximadamente ${IMC}. \n A obesidade grau 1 indica um aumento do risco de problemas de saúde mais sérios. É crucial começar a fazer mudanças no estilo de vida agora. Procure por um programa de perda de peso que inclua uma dieta balanceada e um aumento gradual da atividade física. Além disso, é fundamental ter o suporte de profissionais de saúde, como médicos e nutricionistas, para monitorar seu progresso e garantir que suas necessidades nutricionais e de saúde sejam atendidas de forma segura.` } else if (IMC > 34.9 && IMC <= 39.9) { document.querySelector("p#IMC").innerHTML = `O seu IMC vale aproximadamente ${IMC}. \n Com a obesidade grau 2, o risco de complicações de saúde é ainda maior. É extremamente importante buscar ajuda profissional para criar um plano de perda de peso que funcione para você. Isso pode incluir mudanças significativas na dieta, aumento da atividade física e, em alguns casos, medicação ou intervenções médicas. O apoio de uma equipe de saúde multidisciplinar pode ser muito útil para oferecer orientação e motivação ao longo do caminho.` } else {
        document.querySelector("p#IMC").innerHTML = `O seu IMC vale aproximadamente ${IMC}. \n A obesidade grau 3, também conhecida como obesidade mórbida, é uma condição grave que requer intervenção médica imediata. O risco de desenvolver condições graves de saúde, como doenças cardíacas, diabetes tipo 2 e certos tipos de câncer, é significativamente alto. Procurar um profissional de saúde para obter um plano de tratamento abrangente é crucial. Isso pode incluir orientação nutricional, um programa de exercícios supervisionado, medicação e, em alguns casos, cirurgia bariátrica. A mudança de hábitos é desafiadora, mas com o apoio certo, é possível alcançar melhorias significativas na saúde e na qualidade de vida.`
    }
}


function calculoIAC() {
    let altura = document.getElementById("Altura").value
    altura = parseFloat(altura)
    let CQ = document.getElementById("CQ").value
    CQ = parseFloat(CQ)
    IAC = (CQ / (altura) ** 1.5)
    document.querySelector("p#IAC").innerHTML = `O seu Índice de Adiposidade Corporal vale: ${IAC} `
}

function calculoICQ() {
    let CC = document.getElementById("CC").value
    CC = parseFloat(CC)
    let CQ = document.getElementById("CQ").value
    CQ = parseFloat(CQ)
    const ICQ = CC / CQ
    document.querySelector("p#ICQ").innerHTML = `O seu Índice de Cintura - Quadril vale: ${ICQ} `
}

function calculoPesoIdeal() {
    let massa = document.getElementById("Massa").value
    massa = parseFloat(massa)
    let altura = document.getElementById("Altura").value
    altura = parseFloat(altura)
    if (sexo === "Masculino") {
        const PIM = 52 + (0.75*(altura-152.4))
        document.querySelector("p#PI").innerHTML = `O seu Peso Ideal vale: ${PIM} `
    }
    else {
        const PIF = 52 + (0.67*(altura-152.4))
        document.querySelector("p#PI").innerHTML = `O seu Peso Ideal vale: ${PIF} `
    }
}

function calculoTGC() {
    let massa = document.getElementById("Massa").value
    massa = parseFloat(massa)
    let altura = document.getElementById("Altura").value
    altura = parseFloat(altura)
    let idade = document.getElementById("Idade").value
    idade = parseFloat(idade)
    const IMC = massa / (altura * altura)
    if (sexo === "Masculino") {
        const TGCM = (1.20 * IMC) + (0.23 * idade) - 16.2
        document.querySelector("p#TGC").innerHTML = `A sua Taxa de Gordura Corporal vale: ${TGCM} `
    }
    else {
        const TGCF = (1.20 * IMC) + (0.23 * idade) - 5.4
        document.querySelector("p#TGC").innerHTML = `A sua Taxa de Gordura Corporal vale: ${TGCF} `
    }


}

function calculoTMB() {
    let massa = document.getElementById("Massa").value
    massa = parseFloat(massa)
    let altura = document.getElementById("Altura").value
    altura = parseFloat(altura)
    let idade = document.getElementById("Idade").value
    idade = parseFloat(idade)
    let sexo = document.getElementById("sexo").value
    if (sexo === "Masculino") {
        const TMBM = 88.36 + (13.4 * massa) + (4.8 * altura) - (5.7 * idade)
        document.querySelector("p#TMB").innerHTML = `A sua Taxa Metabólica Basal vale: ${TMBM} calorias. Essa é a quantidade total de calorias consumidas para manter as funções vitais, incluindo os batimentos cardíacos, a pressão arterial e a temperatura corporal.`
    }
    else {
        const TMBF = 447.6 + (9.2 * massa) + (3.1 * altura) - (4.3 * idade)
        document.querySelector("p#TMB").innerHTML = `A sua Taxa Metabólica Basal vale: ${TMBF} calorias. Essa é a quantidade total de calorias consumidas para manter as funções vitais, incluindo os batimentos cardíacos, a pressão arterial e a temperatura corporal.`
    }
}
