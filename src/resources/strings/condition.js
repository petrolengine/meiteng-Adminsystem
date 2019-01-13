/* encoding: utf-8 */

const RoomConditionStr = {
    main: {
        "性质": {
            type: 1,
            content: [
                "全部",
                "新房"
            ]
        },
        "状态": {
            type: 1,
            content: [
                "全部",
                "待售",
                "已售"
            ]
        },
        "位置": {
            type: 2,
            content: [
                "全部",
                "学校",
                "商圈",
                "医院",
                "办公",
                "企业",
                "滨江"
            ]
        },
        "单价": {
            type: 1,
            content: [
                "全部",
                "6千元以下",
                "6千元-1万元",
                "1万-1.5万",
                "1.5万-2万",
                "2万元以上"
            ]
        },
        "户型": {
            type: 1,
            content: [
                "全部",
                "一室",
                "二室",
                "三室",
                "四室",
                "五室及以上"
            ]
        },
        "类型": {
            type: 1,
            content: [
                "全部",
                "住宅",
                "别墅",
                "商铺",
                "商住",
                "写字楼"
            ]
        },
        "筛选": {
            type: 3,
            content: [
                "面积",
                "楼层",
                "朝向",
                "装修",
                "其它"
            ]
        }
    },
    sub: {
        "学校": [
            "全部",
            "浣江小学",
            "行知小学",
            "黄沙小学",
            "暨阳小学",
            "滨江小学",
            "江东小学",
            "新世纪小学"
        ],
        "面积": [
            "全部",
            "50平米以下",
            "50-70平米",
            "70-90平米",
            "90-110平米",
            "110-130平米",
            "130-150平米",
            "150-200平米",
            "200-300平米",
            "300平米以上"
        ],
        "楼层": [
            "全部",
            "6层以下",
            "6-12层",
            "12层以上"
        ],
        "朝向": [
            "全部",
            "东",
            "南",
            "西",
            "北",
            "东南",
            "东北",
            "西南",
            "西北"
        ],
        "装修": [
            "全部",
            "毛坯",
            "普通装修",
            "豪华装修",
            "精装修"
        ],
        "其它": [
            "全部",
            "毛坯",
            "普通装修",
            "豪华装修",
            "精装修"
        ]
    }
};

export default RoomConditionStr;