/**
 * 通过入参字段物料id(即material_id字段)获取商品库
 *
 * 整理自 [【官方教程】官方商品库大全—API物料id表](https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html#/detail/10628875?_k=gpov9a)
 *
 * - 淘宝客-推广者-物料精选：taobao.tbk.dg.optimus.material(适用于自己推广的媒体)
 * [【API详细字段点此查看】](https://open.taobao.com/api.htm?spm=a211vu.11758832.0.0.519e1ce3HQ1Ero&docId=33947&docType=2)
 *
 * - 淘宝客-服务商-物料精选：taobao.tbk.sc.optimus.material(适用于工具服务商)
 * [【API详细字段点此查看】](https://open.taobao.com/api.htm?spm=a211vu.11758832.0.0.519e1ce3HQ1Ero&docId=37884&docType=2)
 */
export const 物料表 = {
  聚划算: {
    /** 聚划算内的有满减或满折类的商品库获取 */
    满减满折id: 32366,
    /** 精选聚划算适合淘宝客推广单品爆款，包含单品团爆款，支持提前获取商品活动活动利益点预热 */
    单品爆款: {
      热卖id: 31371,
      预热id: 31370,
    },
  },
  天猫超市: {
    /** 天猫超市内的有满减或满折类的商品库获取 */
    满减满折id: 27160,
    /** 精选天猫超市适合淘宝客推广单品爆款 */
    优质爆款: {
      第二件0元id: 27161,
      单件满减包邮id: 27160,
    },
  },
  天猫国际: {
    直营类目爆款清单id: 44413,
    大贸清单id: 44412,
    直营爆款补贴清单id: 37089,
    直营爆款清单id: 37088,
    直营品牌清单id: 38508,
    直营99元选10件id: 36223,
    直营2件5折起id: 36224,
    满199选N件id: 28659,
    满元选35件id: 28658,
  },
  /** 淘抢购商品库 */
  淘抢购id: 34616,
  /** 低价好货，工厂产业带爆款 */
  天天特卖id: 31362,
  /**
   * 商品本身是受欢迎的品质好货，淘宝有好货的产品心智
   *
   * 数量：每个 `id` 同时产出 **1000** 款商品
   */
  有好货: {
    精品id: 4092,
  },

  /**
   * **特色**：数据源同联盟 app 的好券直播。小时计更新，展示联盟高佣优质商品库中的领券热门商品
   *
   * **数量**：每个 `id` 同时产出 **200** 款商品
   */
  好券直播: {
    综合id: 3756,
    女装id: 3767,
    家居家装id: 3758,
    数码家电id: 3759,
    母婴id: 3760,
    食品id: 3761,
    鞋包配饰id: 3762,
    美妆个护id: 3763,
    男装id: 3764,
    内衣id: 3765,
    运动户外id: 3766,
  },
  /**
   * **特色**：淘宝客渠道每日实时热销爆款，官方数据实时更新
   *
   * **数量**：每个 `id` 同时产出 **500** 款商品
   */
  实时热销榜: {
    综合id: 28026,
    大快消id: 28027,
    电器美家id: 28028,
    大服饰id: 28029,
  },

  /**
   * 外卖红包，飞猪网红酒店/自助餐/亲子门票等，电影代金券，优酷视频会员，
   * 体检/口腔检查/医美，阿里汽车，必胜客肯德基等套餐
   */
  本地生活: {
    今日爆款: {
      综合类目id: 30443,
    },
    淘票票: {
      电影代金券id: 19812,
    },
    大麦网: {
      票务id: 25378,
    },
    优酷会员: {
      视频年卡id: 28636,
    },
    有声内容: {
      喜马拉雅年卡id: 29105,
    },
    /**
     * 活动页：[阿里健康](https://mos.m.taobao.com/taokeapp/tmpl_page_201909030630177_copy_b36453c)
     */
    阿里健康: {
      hpv疫苗预约id: 25885,
      体检id: 25886,
      口腔id: 25888,
      基因检测id: 25890,
    },
    /**
     * 活动页：[阿里健康](https://mos.m.taobao.com/taokeapp/tmpl_page_201909030630177_copy_8f45a12)
     */
    飞猪: {
      签证id: 26077,
      酒店id: 27913,
      自助餐id: 27914,
      门票id: 19811,
    },
    口碑: {
      /**
       * 活动页：[阿里健康](https://mos.m.taobao.com/taokeapp/tmpl_page_201909030630177_copy_c3edc58)
       */
      肯德基_必胜客_麦当劳id: 19810,
      生活服务id: 28888,
    },
    天猫无忧购: {
      /**
       * 活动页：[阿里健康](https://mos.m.taobao.com/taokeapp/tmpl_page_201909030630177_copy_79e0fc8)
       */
      家政服务id: 19814,
    },
    汽车定金: {
      汽车定金id: 28397,
    },
  },
  /** 大面额折扣超高佣金，每单赚更多 */
  大额券: {
    综合id: 27446,
    女装id: 27448,
    食品id: 27451,
    美妆个护id: 27453,
    家居家装id: 27798,
    母婴id: 27454,
  },
  /**
   * **特色**：联盟精品商品库中的高佣商品，佣金最高达90%，按天更新
   *
   * **数量**：每个 `id` 同时产出 **500** 款商品
   */
  高佣榜: {
    综合id: 13366,
    女装id: 13367,
    家居家装id: 13368,
    数码家电id: 13369,
    母婴id: 13374,
    食品id: 13375,
    鞋包配饰id: 13370,
    美妆个护id: 13371,
    男装id: 13372,
    内衣id: 13373,
    运动户外id: 13376,
  },
  /**
   * **特色**：综合品牌、佣金和券因素的优质商品
   *
   * **数量**：每个 `id` 同时产出 **200** 款商品
   */
  品牌券: {
    综合id: 3786,
    女装id: 3788,
    家居家装id: 3792,
    数码家电id: 3793,
    母婴id: 3789,
    食品id: 3791,
    鞋包配饰id: 3796,
    美妆个护id: 3794,
    男装id: 3790,
    内衣id: 3787,
    运动户外id: 3795,
  },
  /**
   * **特色**：定位在母婴市场，围绕从备孕到儿童不同阶段对商品的诉求提供商品库。
   * 适用于母亲节、520、61儿童节等母婴主题节气，也适用于母婴类网站选品需求
   *
   * **数量**：每个 `id` 同时产出 **1000** 款商品
   */
  母婴主题: {
    备孕id: 4040,
    月0至6id: 4041,
    岁4至6id: 4044,
    月7至12id: 4042,
    岁1至3id: 4043,
    岁7至12id: 4045,
  },
  /**
   * **特色**：代表当下时尚和流行趋势的商品，
   * 商品调性类似淘宝ifashion、潮电街、酷动城
   *
   * **数量**：每个 `id` 同时产出 **1000** 款商品
   */
  潮流范id: 4093,
  /**
   * **特色**：优质特惠宝贝。优先考虑因素：销量高，评价高，点击转化好、
   * 有创意、有吸引力、便宜、30天历史新低。
   * 选品覆盖手淘主要特惠场景
   *
   * **数量**：每个 `id` 同时产出 **1000** 款商品
   */
  特惠id: 4094,

  /**
   * ## 功能类物料id
   * 根据入参字段：(商品ID)`item_id`，即可查询到在对应物料 `id` 的商品库内，
   * 与此商品关联或相近的商品，及其对应字段信息
   *
   * **注意**：要使用以下物料 id，请先去
   * https://pub.alimama.com/
   * ——>我的工具——>智能导购API授权”，签订协议后，才可调用
   */
  相似推荐: {
    相似推荐id: 13256,
  },
  /**
   * ## 功能类物料id
   * 根据入参字段：(智能匹配)`device_type`、`device_encrypt`、`device_value`，
   * 官方会提供用户个性化的推荐商品及排序
   *
   * **注意**：要使用以下物料 id，请先打开链接签订协议
   * https://pub.alimama.com/fourth/tool/api/index.htm，
   * 签订协议后，才可调用
   */
  猜你喜欢: {
    全部商品id: 6708,
    /** 此为具备**私域用户管理-会员运营管理功能**的媒体专用 */
    营销商品库商品id: 28017,
  },
  /**
   * ## 功能类物料id
   * 选品库是指淘宝联盟在https://pub.alimama.com/
   * 后台——>我要推广——>商品推广 中，
   * 所提供给淘宝客批量管理和获取所需推广物料的功能，
   * 您可创建不同的选品库，比满足对不同类型商品筛选和管理的需要。
   * 进入“我的选品库”后，即可看到您所创建的所有选品库及对应商品，
   * 可修改并增减商品。
   */
  选品库: {
    库列表id: 31519,
    商品列表id: 31539,
  },
  /**
   * ## 官方精选品牌物料id
   * **特色**：淘宝联盟品牌商品推广物料，
   * 覆盖数码、家居、日用百货及旅行等官方精选品牌热销清单
   *
   * **数量**：每个 `id` 同时产出 **10000余** 款商品
   *
   * API接入方法：
   *
   * taobao.tbk.dg.optimus.material( 淘宝客-推广者-物料精选 )  [查看教程](https://open.taobao.com/api.htm?spm=a211vu.11758832.0.0.519e1ce3CRjB2m&source=search&docId=33947&docType=2)
   * taobao.tbk.sc.optimus.material( 淘宝客-服务商-物料精选 )  [查看教程](https://open.taobao.com/api.htm?spm=a211vu.11758832.0.0.519e1ce3CRjB2m&source=search&docId=37884&docType=2)
   */
  品牌精选清单id: 39313,
}
