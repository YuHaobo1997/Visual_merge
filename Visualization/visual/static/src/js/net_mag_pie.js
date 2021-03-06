﻿function pie1(mychart, a) {

    option = {
        //backgroundColor: '#333333',
        color: ['#FFAE57', '#EA5151', '#ebdba4', '#893448', '#b86f56', '#FF7853'],

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.value[0] + ': ' + params.value[1] + '家 (' + ((params.value[1] / 103) * 100).toFixed(2) + '%)';
            }
        },
        dataset: {
            source: []
        },

        series: [{
            name: '人均时长',
            type: 'pie',
            radius: ['10%', '65%'],
            center: ['50%', '50%'],
            encode: {
                itemName: 'category',
                value: 'value'
            },
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#e3e3e3',
                        fontSize: a * 0.009,

                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#e3e3e3'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 80,
                    shadowColor: 'rgba(255,178,72,0.2)',
                    opacity: 0.8,
                }
            },

            animationType: 'espension',

            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }]
    };

    $.get('/static/DATA/net-manage.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset: {
                source: data.pie1,
            },

        });

    });
    mychart.setOption(option);
}


function pie2(mychart, a) {
    option = {
        //backgroundColor: '#333333',
        color: ['#FFAE57', '#EA5151', '#ebdba4', '#893448', '#FF7853', ],

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.value[0] + ': ' + params.value[1] + '家 (' + ((params.value[1] / 103) * 100).toFixed(2) + '%)';
            }
        },
        dataset: {
            source: []
        },

        series: [{
            name: '人均时长',
            type: 'pie',
            radius: ['10%', '65%'],
            center: ['50%', '50%'],
            encode: {
                itemName: 'category',
                value: 'value'
            },
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#e3e3e3',
                        fontSize: a * 0.009,

                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#e3e3e3'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 80,
                    shadowColor: 'rgba(255,178,72,0.2)',
                    opacity: 0.8,
                }
            },

            animationType: 'espension',

            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }]
    };

    $.get('/static/DATA/net-manage.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset: {
                source: data.pie2,
            },

        });

    });
    mychart.setOption(option);
}