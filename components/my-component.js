import {LitElement, html} from 'lit-element';
import {increment,decrement} from '../redux/actions/actions-count';
import {store} from '../redux/store';

export class ElementoPropio extends LitElement{
    static get properties(){
        return{
            contadores:{type:Number}
        }
    }
    constructor(){
        super();
        this.contadores = store.getState().Contador;
    }
    render(){
        return html`<div>Mi primer elemento</div>
                <div><button @click=${this.__onClickConReduxIncrement}>Contar con redux increment</button></div>
                <div><button @click=${this.__onClickConReduxDecrement}>Contar con redux decrement</button></div>
                <div>Conteo con redux: ${this.contadores}</div>`;
    }
    __onClickConReduxIncrement(){
        //store.dispatch(increment);
        store.dispatch(increment());
        this.contadores = store.getState().Contador;
    }
    __onClickConReduxDecrement(){
        store.dispatch(decrement());
        this.contadores = store.getState().Contador;
    }
}