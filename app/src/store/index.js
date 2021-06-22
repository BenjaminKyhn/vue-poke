import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0,
        players: [{name:'Loverino', id:1}, {name:'Mools', id:2}, {name:'Benjamax', id:3}]
    },
    mutations: {
        setCounter(state, payload) {
            state.counter += payload
        }
    },
    actions: {
        memefunc(context, payload) {
            context.commit('setCounter', payload)
        },
        getPlayers(context) {
            try {
                axios.get('http://localhost:3005/playerz')
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        getPlayerById1: (state) => (id) => {
            return state.players.find(player => player.id === id)
        },
        getPlayerById2(state) {
            return state.players;
        }
    },
    modules: {}
})
