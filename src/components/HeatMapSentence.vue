<template>
  <div>
    <input @change="read_csv" type="file" value="读取csv文件">
    <div v-for="sentence in sentence_list" align="left">
      <!--<div class="word_block">-->
      <!--<div id="label">{{sentence.intent}}/{{sentence.predict}}</div>-->
      <!--</div>-->

      <br>
      <label>用户句子&nbsp&nbsp:</label>
      <div class='word_block' v-for="(item,index) in sentence.input_sentence" :key="item.index">
        <div :style="{background:sentence.input_sentence_weight[index]}">
          {{sentence.input_sentence[index]}}
        </div>
      </div>
      <span  v-for="(item,index) in sentence.input_sentence" :key="item.index">{{sentence.input_sentence[index]}}</span>
      <br>
      <label>正确句子&nbsp&nbsp:</label>
      <div class='word_block' v-for="(item,index) in sentence.true_sentence" :key="item.index">
        <div :style="{background:sentence.true_sentence_weight[index]}">
          {{sentence.true_sentence[index]}}
        </div>
      </div>
      <label>score: {{sentence.true_sentence_score}} </label>
      <br>
      <label>预测句子1:</label>
      <div class='word_block' v-for="(item,index) in sentence.predict_sentence_1" :key="item.index">
        <div :style="{background:sentence.predict_sentence_1_weight[index]}">
          {{sentence.predict_sentence_1[index]}}
        </div>
      </div>
      <label>score: {{sentence.predict_sentence_1_score}}</label>
      <br>
      <label>预测句子2:</label>
      <div class='word_block' v-for="(item,index) in sentence.predict_sentence_2" :key="item.index">
        <div :style="{background:sentence.predict_sentence_2_weight[index]}">
          {{sentence.predict_sentence_2[index]}}
        </div>
      </div>
      <label>score: {{sentence.predict_sentence_2_score}}</label>
      <br>
      <label>预测句子3:</label>
      <div class='word_block' v-for="(item,index) in sentence.predict_sentence_3" :key="item.index">
        <div :style="{background:sentence.predict_sentence_3_weight[index]}">
          {{sentence.predict_sentence_3[index]}}
        </div>
      </div>
      <label>score: {{sentence.predict_sentence_3_score}}</label>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        sentence_list: [
          {
            true_sentence: ['我', '是', '真实句子', '0'],
            true_sentence_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            true_sentence_score: 0.6,
            predict_sentence_1: ['我', '是', '预测句子', '1'],
            predict_sentence_1_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            predict_sentence_1_score: 0.6,
            predict_sentence_2: ['我', '是', '预测句子', '2'],
            predict_sentence_2_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            predict_sentence_2_score: 0.7,
            predict_sentence_3: ['我', '是', '预测句子', '3'],
            predict_sentence_3_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            predict_sentence_3_score: 0.8,
            input_sentence: ['我', '要', '上网'],
            input_sentence_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
          },
          {
            true_sentence: ['我', '是', '真实句子', '0'],
            true_sentence_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            predict_sentence_1: ['我', '是', '预测句子', '1'],
            predict_sentence_1_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            predict_sentence_2: ['我', '是', '预测句子', '2'],
            predict_sentence_2_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            predict_sentence_3: ['我', '是', '预测句子', '3'],
            predict_sentence_3_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)'],
            input_sentence: ['我', '要', '上网'],
            input_sentence_weight: ['rgba(155,241,241)', 'rgba(241,241,241)', 'rgba(241,241,241)']
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
          for (let i = 0; i < that.raw_data.length - 1; i = i + 10) {
            let o = {};
            o.input_sentence = that.raw_data[i].split(',').slice(1);
            o.input_sentence_weight = that.to_color(that.raw_data[i + 1].split(',').slice(1));
            o.true_sentence = that.raw_data[i + 2].split(',').slice(2);
            o.true_sentence_score = that.raw_data[i + 2].split(',')[1];
            o.true_sentence_weight = that.to_color(that.raw_data[i + 3].split(',').slice(1));
            o.predict_sentence_1 = that.raw_data[i + 4].split(',').slice(2);
            o.predict_sentence_1_score = that.raw_data[i + 4].split(',')[1];
            o.predict_sentence_1_weight = that.to_color(that.raw_data[i + 5].split(',').slice(1));
            o.predict_sentence_2 = that.raw_data[i + 6].split(',').slice(2);
            o.predict_sentence_2_score = that.raw_data[i + 6].split(',')[1];
            o.predict_sentence_2_weight = that.to_color(that.raw_data[i + 7].split(',').slice(1));
            o.predict_sentence_3 = that.raw_data[i + 8].split(',').slice(2);
            o.predict_sentence_3_score = that.raw_data[i + 8].split(',')[1];
            o.predict_sentence_3_weight = that.to_color(that.raw_data[i + 9].split(',').slice(1));
            sentenceList.push(o)
          }
          that.sentence_list = sentenceList
        };
        reader.readAsText(file)
      },
      to_color(weight_list) {
        let color_list = [];
        for (let j = 0; j < weight_list.length; j++) {
          color_list.push('rgba(' + 101 + (255 - 0) * (1 - weight_list[j]) + ',' + 0 + (255 - 0) * (1 - weight_list[j]) + ',' + 255 + ')')
        }
        return color_list
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
    color: rgb(101, 129, 87);
    width: auto;
  }

  #label {
    width: 1000px;
    /*width: auto;*/
    padding: 0;
  }
</style>
