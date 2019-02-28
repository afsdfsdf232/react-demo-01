import { fromJS } from 'immutable'
const defaultState = {
    topicList: [
                {
                    id: 1,
                    title: '社会热点',
                    imgUrl: '//upload.jianshu.io/collections/images/1450/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 2,
                    title: '手绘',
                    imgUrl: '//upload.jianshu.io/collections/images/345402/%E7%A0%94%E4%B9%A0%E7%A4%BELOGO.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 3,
                    title: '区块链',
                    imgUrl:'//upload.jianshu.io/collections/images/591309/%E5%8C%BA%E5%9D%97%E9%93%BE.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 4,
                    title: '金马奖',
                    imgUrl: '//upload.jianshu.io/collections/images/481178/logo%E7%AB%96%E7%89%88_small.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 5,
                    title: 'UIord社区',
                    imgUrl: '//upload.jianshu.io/collections/images/610829/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180520203935.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 6,
                    title: '话题',
                    imgUrl: '//upload.jianshu.io/users/upload_avatars/3673618/7820d91ff336.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
                },
                {
                    id: 7,
                    title: '前沿技术',
                    imgUrl: '//upload.jianshu.io/collections/images/9594/1424504772.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 8,
                    title: '摄影',
                    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 9,
                    title: '读书会',
                    imgUrl:'//upload.jianshu.io/collections/images/1686599/1_%E9%92%BB%E7%9F%B3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 10,
                    title: '在路上',
                    imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                },
                {
                    id: 11,
                    title: '青春',
                    imgUrl: '//upload.jianshu.io/collections/images/20/%E5%9B%BE.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
                }
                ],
    articeList:[
        {
            id: 1,
            title:'2019年请把这9句话写在你的办公桌上！',
            desc:'2019年，必须写在办公桌上的9句话。 1.不为模糊不清的未来担忧，只为清清楚楚的现在努力 2.只有先改变自己的态度，才能改变人生的高度 3.在...',
            imgUrl:'//upload-images.jianshu.io/upload_images/7168338-d3041ff429ea5aef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title:'黄泉路近，你才知道，枕边人是个什么东西',
            desc:'肝癌晚期第177天。距离女儿高考还有13天。 连日的疼痛已经使她睡不着吃不下，为了不让自己的痛苦影响家里人的正常生活，她谎称出去散心，常常到一处...',
            imgUrl:'//upload-images.jianshu.io/upload_images/12996091-f6acf43463eac855.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 3,
            title:'我们的一日三餐',
            desc:'2月25日，青岛晴 民以食为天，真的是说到我的心坎上。在青岛女儿家，清晨醒来第一反应是：早餐吃什么？晚饭后，一家人还在不停地吃这吃那。临睡前，我...',
            imgUrl:'//upload-images.jianshu.io/upload_images/7107657-4f96dbfe231fc20d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 4,
            title:'请于春天摇曳出一抹彩色',
            desc:'天气预报说今天有小雨，果然，午后的窗外，春雨已经开始淅淅沥沥地飘洒。 终究已是初春，哪怕依然很难见到太阳，气温却已经开始上升到零度以上了。 像我...',
            imgUrl:'//upload-images.jianshu.io/upload_images/1905800-8b4ab66f01da45d0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 5,
            title:'生活需要仪式感',
            desc:'回到学校的第一件事，就是整理书桌，打扫卫生。 一直以来，我很想做一个极简者，无奈东西太多，成了囤积者。刚入校时，我搬来的东西就不像新生，反而像一...',
            imgUrl:'//upload-images.jianshu.io/upload_images/1939813-3d6fffbe9c26d6c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },{
            id: 6,
            title:'时光正好，心正暖',
            desc: '【心情美文】 倚着时光的温润，摘一朵春，掬一涯溪，摇曳春情深深。吟一首风月小诗，忆一湖清荷静水，如莲的心，几番沉醉，尘缘起落，婉转于指间。人生几...',
            imgUrl: '//upload-images.jianshu.io/upload_images/7388365-f7b87eb9bd227bb2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        ,{
            id: 7,
            title:'出家人，也食人间烟火',
            desc: '最近看到师父一首诗，感慨颇多。 无事跑来转一圈， 只因我心在此间； 人情法情都要有， 不食烟火是神仙。 人在娑婆，身边尽是万丈红尘，谁不是为生活...',
            imgUrl: '//upload-images.jianshu.io/upload_images/12373271-7a41594ba3ee90a1.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        ,{
            id: 8,
            title:'对别人好，不会错！',
            desc: '从小就知道：长大了，要找个疼人的老婆——对男人好，知冷知热；对爹娘好，好好把日子过！ 参加了工作，总希望有个好领导，碰上个好伯乐；出门在外，总希...',
            imgUrl: '//upload-images.jianshu.io/upload_images/12496628-51061a245fc0ac21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        ,{
            id: 9,
            title:'【静夜思学习笔记】 价和量之间的关系',
            desc: '成交量我们打开行情软件基本上就看到了，但是大多数人并没有理解量和股价之间的关系，能给我们带来什么上策略指导。在陆蓉的金融行为学中提到一个价量关系...',
            imgUrl: '//upload-images.jianshu.io/upload_images/9484123-2af33c3c2c573fac?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        ,{
            id: 10,
            title:'这三种性格的人，很容易一直单身',
            desc: '你单身多少年了，你有没有想过，为什么身边很多明明长的没有你好看，家境没有你好，工作也没有你好的人，他们纷纷都脱单了，偏偏自己却一直找不到对象呢。...',
            imgUrl: '//upload-images.jianshu.io/upload_images/2100084-7a0cd4433066fc36?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        }
    ],
    reImg:[
        {
            id:1,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:2,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png'
        },
        {
            id:3,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
        },
        {
            id:4,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id:5,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id:6,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ]
}
export default (state = defaultState, action) => {
    switch(action.type){
        default: 
            return state
    }
}