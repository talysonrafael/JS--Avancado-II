class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        let self = this;

        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
                                new NegociacoesView($('#negociacoesView')),
                                'apaga', 'adiciona');

        this._mensagem = new Bind(new Mensagem(), 
                        new MensagemView($('#mensagemView')),
                         'texto');
             
    }
    
    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        
        this._limpaFormulario();   
    }

    apaga() {
        this._listaNegociacoes.apaga();
        this._mensagem.texto = 'Negociações removidas com sucesso';
        this._mensagemView.update(this._mensagem);
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}