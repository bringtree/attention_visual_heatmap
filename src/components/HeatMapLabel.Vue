<template>
  <div>
    <input @change="read_csv" type="file" value="读取csv文件">
    <div v-for="sentence in sentence_list" align="left">
      <div class="word_block">
        <div id="label">{{sentence.intent}}/{{sentence.predict}}</div>
      </div>
      <div class='word_block' v-for="(item,index) in sentence.word" :key="item.index">
        <div :style="{background:sentence.weight[index]}">
          {{sentence.word[index]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        sentence_list: [
          {
            intent: 'chat',
            predict: 'chat',
            word: ['我', '要', '上网'],
            weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)']
          },
          {
            intent: 'chat',
            predict: 'chat',
            word: ['我', '要', '上网'],
            weight: ['rgba(241,241,241)', 'rgba–(241,241,241)', 'rgba(241,241,241)']
          }
        ],
        raw_data: ''
      }
    },
    methods: {
      read_csv(e) {
        const that = this;
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          that.raw_data = e.target.result.split('\n');
          let sentenceList = [];
          for (let i = 0; i < that.raw_data.length - 1; i = i + 2) {
            let o = {};
            let word = that.raw_data[i].split(',');
            let value = that.raw_data[i + 1].split(',');
            o.intent = word[0];
            o.predict = value[0];
            o.word = [];
            o.weight = [];
            for (let j = 1; j < word.length; j++) {
              o.word.push(word[j]);
              o.weight.push('rgba(' + 0 + (255 - 0) * (1 - value[j]) + ',' + 0 + (255 - 0) * (1 - value[j]) + ',' + 255 + ')')
            }

            sentenceList.push(o)
          }
          that.sentence_list = sentenceList
        }
        reader.readAsText(file)
      }
    },
    mounted() {

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .word_block {
    width: auto;
    padding: 2px;
    padding-left: 0;
    display: inline-block;
    /*vertical-align: middle;*/
  }

  .word_block div {
    color: black;
    width: auto;
  }

  #label {
    width: 1000px;
    /*width: auto;*/
    padding: 0;
  }
</style>
