##
效果图
![效果图](https://github.com/bringtree/attention_visual_heatmap/blob/master/%E6%95%88%E6%9E%9C%E5%9B%BE.png)

##
导入的数据格式:<br/>
真实类别,词1,词2,<br/>
预测类别,词1权重,词2权重,
```xls
input_sentence,授课,克隆,模式
input_sentence_weight,0.3312545,0.33718422,0.3315616
true_sentence,23.167501,希沃,白板,软件,备课,界面,授课,界面
true_sentence_weight,0.14136262,0.1426218,0.14303628,0.14376828,0.14351156,0.14368826,0.14201133
predict_sentence_1,75.88924,希沃,白板,克隆
predict_sentence_1_weight,0.33143377,0.332426,0.3361405
predict_sentence_2,53.416924,进入,希沃,白板,授课,模式
predict_sentence_2_weight,0.20076375,0.19977301,0.20046267,0.20019132,0.19880943
predict_sentence_3,37.278225,切换,希沃,一体机,安卓,pc,模式
predict_sentence_3_weight,0.16673824,0.16630363,0.16691878,0.16663365,0.16749902,0.16590673
```

##
使用方法
打开dist目录下的index.html。然后导入对应格式的csv文件
