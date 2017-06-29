class ProxyFactory {
    
    static create(objeto, props, acao) {
        return new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver) {
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) acao(target);
                    return retorno;
            }

        });
    }

    static _ehFuncao(func) {
        return typeof(func) == typeof(Function);
    }
}


