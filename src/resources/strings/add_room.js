const AddRoomStr = {
    area: "小区",
    area_placehold: "选择小区",
    landlord_placehold: "选择房东",
    base_info: "基本信息",
    huxing: "户型",
    bedroom: "室",
    livingroom: "厅",
    toliet: "卫",
    mianji_louceng: "面积/楼层",
    pingmi: "平米",
    louceng: "楼层",
    danjia_zongjia: "单价/总价",
    yuan_pingmi: "元/平米",
    wanyuan: "万元",
    chewei_jiage: "车位/价格",
    chewei: "车位",
    wanyuan_ge: "万元/个",
    wuyegongsi: "物业公司",
    wuyegongsi_ph: "请输入物业公司",
    peitaosheshi: "设施配套",
    types: "类型",
    direction: "朝向",
    decorate: "装修",
    deposit: "元押金",
    rental: "元/月",
    stage: "个月/期",
    is_sharing: "是否整租",
    sharing: "整租",
    peitaosheshis: [
        [
            { key: "elevator", value: "电梯" },
            { key: "balcony", value: "阳台" },
            { key: "broadband", value: "宽带" },
            { key: "hot_water_heater", value: "热水器" },
            { key: "tv", value: "电视" },
        ],
        [
            { key: "aircondition", value: "空调" },
            { key: "heating", value: "暖气" },
            { key: "refrigerator", value: "冰箱" },
            { key: "washing_machine", value: "洗衣机" },
            { key: "bed", value: "床" },
        ],
        [
            { key: "wardrobe", value: "衣柜" },
            { key: "gas", value: "天然气" },
        ],
    ],
};

export const RoomDirection = {
    EAST: "东",
    SOUTH: "南",
    WEST: "西",
    NORTH: "北",
    SOUTH_EAST: "东南",
    NORTH_EAST: "西南",
    SOUTH_WEST: "东北",
    NORTH_WEST: "西北",
};

export const RoomDecorate = {
    UNFURNISHED: "毛胚",
    ORDINARY: "普通装修",
    FINE: "精装修",
    LUXURY: "豪华装修",
};

export const RoomType = {
    HOUSE: "住宅",
    VILLA: "别墅",
    SHOPS: "商铺",
    COMMERCIAL_RESIDENTIAL: "商住",
    OFFICE: "写字楼",
    APARTMENT: "公寓"
};

export default AddRoomStr;