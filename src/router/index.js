import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HeatMapLabel from '@/components/HeatMapLabel'
import HeatMapSentence from '@/components/HeatMapSentence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/heatmap2sentence',
      name: 'HeatMapSentence',
      component: HeatMapSentence
    },
    {
      path: '/heatmap2label',
      name: 'HeatMapLabel',
      component: HeatMapLabel
    },

  ]
})
