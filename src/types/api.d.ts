export enum CourseLevel {
  Middle = 'MIDDLE',
  Senior = 'SENIOR',
}
export enum Player {
  Hwyun = 'HWYUN',
}
export enum ProductType {
  Course = 'COURSE',
}

/**
 * 接口返回基本数据类型
 */
export interface IApiBase<T> {
  code: number;
  msg: string;
  data: T;
}
/**
 * 微信二维码接口返回参数
 */
export interface IWechat {
  qrcodeUrl: string;
  ticket: string;
}
/**
 * 商品分类接口返回参数
 */
export interface ICategoryList {
  id: number;
  name: string;
  pid: number;
  gmt_create: string;
  gmt_modified: string;
  level: null;
  subCategoryList?: ICategoryList[];
  productList?: IProduct[];
}

export interface ProductList {
  id: number;
  title: string;
  cover_img: string;
  old_amount: string;
  amount: string;
  summary: string;
  detail: string;
  product_type: ProductType;
  uv: number;
  buy_num: number;
  teacher_id: number;
  course_level: CourseLevel;
  hour: number;
  episode_num: number;
  player: Player;
  tdk: null;
  ali_zip_url: null;
  bd_zip_url: string;
  note_url: string;
  del: number;
  gmt_modified: string;
  gmt_create: string;
  total_point: string;
  content_point: string;
  easy_point: string;
  logic_point: string;
}

export interface IBannerQuery {
  current_data: IBanner[];
  total_page: number;
  total_record: number;
}


/**
 * 轮播图接口返回参数
 */
export interface IBanner {
  id: number;
  location: string;
  name: string;
  img_url: string;
  pc_link: string;
  h5_link: string;
  expired: string;
  del: number;
  gmt_create: string;
  gmt_modified: string;
}
/**
 * 个人信息接口返回
 */
export interface IUserInfo {
  account_id: null;
  acl: null;
  appid: string;
  appsecret: string;
  bind_wechat: false;
  city: string;
  coin: number;
  company: null;
  credential: null;
  disabled: string;
  email: null;
  gmt_create: string;
  gmt_modified: string;
  headImg: string;
  identifier: null;
  identity_type: null;
  learn_time: 0;
  medal: string;
  phone: null;
  position: null;
  role: string;
  set_password: false;
  sex: string;
  slogan: string;
  social_Id: null;
  sum: null;
  tag: string;
  username: string;
  vip_expired: null;
  vip_rank: 0;
}

/**
 * 教师列表返回参数
 */
export interface ICardQuery {
  current_data: ICard[];
  total_page: number;
  total_record: number;
}

/**
 * 视频卡片接口返回参数
 */
export interface ICard {
  id: number;
  name: string;
  summay: string;
  row_num: number;
  column_num: number;
  product_list: IProduct[];
  card_type: string;
  icon: string;
  weight: number;
  del: number;
  gmt_create: string;
  gmt_modified: string;
}
export interface IProduct {
  id: number;
  title: string;
  cover_img: string;
  old_amount: string;
  amount: string;
  summary: string;
  detail: string;
  product_type: ProductType;
  uv: number;
  buy_num: number;
  teacher_id: number;
  course_level: CourseLevel;
  hour: number;
  episode_num: number;
  player: Player;
  tdk: null;
  ali_zip_url: null;
  bd_zip_url: string;
  note_url: string;
  del: number;
  gmt_modified: string;
  gmt_create: string;
  total_point: string;
  content_point: string;
  easy_point: string;
  logic_point: string;
}

/**
 * 教师列表返回参数
 */
export interface ITeacherQuery {
  current_data: ITeacher[];
  total_page: number;
  total_record: number;
}

/**
 * 讲师接口返回参数
 */
export interface ITeacher {
  id: number;
  name: string;
  profile: string;
  head_img: string;
  wechat_qrcode: null | string;
  pay_qrcode: null | string;
  point: number;
  remark: null | string;
  phone: string;
  online: string;
  gmt_create: string;
  gmt_modified: string;
}

/**
 * 分类查找视频接口返回参数
 */
export interface IPoductQuery {
  current_data: IProduct[];
  total_page: number;
  total_record: number;
}

/**
 * 视频详情接口返回参数
 */
export interface IVideoDitails {
  id: number;
  title: string;
  cover_img: string;
  old_amount: number;
  amount: number;
  summary: string;
  detail: string;
  product_type: string;
  uv: number;
  buy_num: number;
  teacher_id: number;
  course_level: string;
  hour: number;
  episode_num: number;
  player: string;
  tdk: string;
  ali_zip_url: null;
  bd_zip_url: string;
  note_url: string;
  del: number;
  gmt_modified: string;
  gmt_create: string;
  total_point: string;
  content_point: string;
  easy_point: string;
  logic_point: string;
  teacherDetail: TeacherDetail;
}
export interface TeacherDetail {
  id: number;
  name: string;
  profile: string;
  head_img: string;
  wechat_qrcode: string;
  pay_qrcode: string;
  point: number;
  remark: null;
  phone: string;
  online: string;
  gmt_create: string;
  gmt_modified: string;
}

/**
 * 最近在学接口返回参数
 */
export interface IlatestLearn {
  id: number;
  account_id: number;
  username: string;
  user_head_img: string;
  out_trade_no: string;
  transaction_no: null;
  order_state: string;
  total_amount: string;
  pay_amount: string;
  pay_type: null;
  product_id: number;
  product_type: string;
  product_title: string;
  product_img: string;
  ip: string;
  is_comment: number;
  discount_type: null;
  discount_amount: null;
  del: number;
  notify_time: null;
  gmt_create: string;
  gmt_modified: string;
}
/**
 * 视频章集接口参数返回
 */
export interface IChapter {
  id: number;
  product_id: number;
  title: string;
  ordered: number;
  gmt_create: string;
  gmt_modified: string;
  episodeList: EpisodeList[];
}
export interface EpisodeList {
  id: number;
  title: string;
  ordered: number;
  hwyun_id: string;
  aliyun_id: string;
  chapter_id: number;
  duration: string;
  free: number;
  product_id: number;
  gmt_create: string;
  gmt_modified: string;
}
/**
 * 商品评论列表返回参数
 */
export interface IComment {
  current_data: CurrentData[];
  total_page: number;
  total_record: number;
}
export interface CurrentData {
  id: number;
  content: string;
  account_id: number;
  head_img: string;
  username: string;
  up: number;
  order_id: number;
  product_id: number;
  gmt_create: string;
  gmt_modified: string;
  total_point: string;
  content_point: string;
  easy_point: string;
  logic_point: string;
  del: number;
}

// 资料接口返回参数
export interface IVideoMaterials {
  bd_zip_url: string;
  note_url: string;
}

// 热门商品排行榜
export interface IHotProduct {
  id: number;
  title: string;
  img: string;
}

// 商品支付二维码
export interface IWechatPay {
  code_url: string;
  out_trade_no: string;
  ali_pay: string;
}

// 轮询查询订单状态
export interface IOrderState {
  order_state: string;
}

// 视频播放地址
export interface IVideoList {
  playResult: string;
  episodeId: string;
}

//播放记录
export interface IPlayRecord {
  accountId: number;
  coverImg: string;
  currentEpisodeId: number;
  episodeNum: string;
  episodeTitle: string;
  gmtCreate: string;
  gmtModified: string;
  id: number;
  learnIds: string;
  payStatus: string;
  productId: number;
  productTitle: string;
  productType: string;
}


// 卷王排行榜
export interface IDuration {
  id: number;
  username: string;
  head_img: string;
  minute: string;
}
export interface IDanmuQuery {
  current_data: IDanmu[];
  total_page: number;
  total_record: number;
}

// 弹幕列表
export interface IDanmu {
  id: number;
  product_id: number;
  episode_id: number;
  account_id: number;
  head_img: string;
  username: string;
  content: string;
  style: null | string;
  play_time: number;
  source_type: string;
  target_url: null | string;
  gmt_create: string;
  gmt_modified: string;
  del: number;
}

export interface IPage<T> {
  current_data: T[];
  total_page: number;
  total_record: number;
}

export interface IPlayRecord {
  id: number;
  product_id: number;
  current_episode_id: number;
  account_id: number;
  learn_ids: string;
  pay_status: string;
  gmt_modified: string;
  product_title: string;
  cover_img: string;
  episode_num: number;
  product_type: string;
  episode_title: string;
}

export interface ISearchList {
  id: number;
  title: string;
  cover_img: string;
  old_amount: string;
  amount: string;
  summary: string;
  detail: string;
  product_type: string;
  uv: number;
  buy_num: number;
  teacher_id: number;
  course_level: string;
  hour: number;
  episode_num: number;
  player: string;
  tdk: null;
  ali_zip_url: null;
  bd_zip_url: string;
  note_url: string;
  del: number;
  gmt_modified: string;
  gmt_create: string;
  total_point: string;
  content_point: string;
  easy_point: string;
  logic_point: string;
}

export interface IFavorites {
  account_id: number;
  buy_num: number;
  cover_img: string;
  detail: string;
  gmt_create: string;
  gmt_modified: null;
  id: number;
  level: string;
  product_id: number;
  title: string;
  uv: number;
}

export interface INoteQuery {
  current_data: ICourseNote[];
  total_page: number;
  total_record: number;
}


export interface ICourseNote {
  account_id: number;
  content: null;
  cover_img: string;
  del: null;
  episode_id: number;
  episode_title: null;
  gmt_create: null;
  gmt_modified: null;
  head_img: null;
  id: number;
  note_amount: number;
  product_id: number;
  product_title: string;
  product_type: string;
  up: null;
  username: null;
  uv: null;
  weight: null;
  detail: [];
}

export interface IQuestionQuery {
  current_data: IQuestionPerson[];
  total_page: number;
  total_record: number;
}

export interface IQuestionPerson {
  account_id: number;
  answer_num: number;
  coin: number
  content: string;
  del: number;
  episode_id: number;
  episode_title: string;
  gmt_create: string;
  gmt_modified: string;
  head_img: string;
  id: number;
  product_id: number;
  product_title: string;
  title: string;
  up: number;
  username: string;
  uv: number;
  weight: number;
}

export interface IAnswerQuery {
  current_data: IAnswerPerson[];
  total_page: number;
  total_record: number;
}

export interface IAnswerPerson {
  account_id: number;
  content: string;
  del: number;
  episode_id: null;
  episode_title: null;
  gmt_create: string;
  gmt_modified: string;
  head_img: string;
  id: number;
  product_id: number;
  product_title: string;
  question_id: number;
  question_title: string;
  up: number;
  username: string;
  uv: number;
  weight: number;
}

export interface IPoductOrderQuery {
  current_data: IProductOrder[];
  total_page: number;
  total_record: number;
}


export interface IProductOrder {
  account_id: number;
  del: number;
  discount_amount: number;
  discount_type: string;
  gmt_create: string;
  id: number;
  is_comment: number;
  order_state: string;
  out_trade_no: string;
  pay_amount: number;
  pay_type: string;
  product_id: number;
  product_img: string;
  product_title: string;
  product_type: string;
  total_amount: number;
  user_head_img: string;
  username: string;
}

export interface IPageItem {
  del: number;
  gmt_create: string;
  gmt_modified: string;
  h5_link: string;
  id: number;
  img_url: string;
  pc_link: string;
  summary: string;
  title: string;
  type: string;
  weight: number;
}

export interface IProductStage {
  duration: number;
  product_id: number;
  product_summary: string;
  product_tdk: string;
  list: ICourseStage[];
  title: string;
}

export interface ICourseStage {
  gmt_create: string;
  gmt_modified: string;
  id: number;
  stage_index: number;
  stage_item_list: IStageItemList[];
  stage_name: string;
  study_line_type: string;
  sub_title: string;
  summary: string;
  show: boolean;
}

export interface IStageItemList {
  amount: number;
  buy_num: number;
  buy_url: string;
  cover_img: string;
  detail: string;
  gmt_create: string;
  gmt_modified: string;
  id: number;
  item_index: number;
  level: string;
  old_amount: number;
  product_id: number;
  stage_id: number;
  title: string;
  uv: number;
}

export interface IProductDetail {
  product: IProductOrder;
  token: string;
}


/**
 * 用户列表数据
 */
export interface IAccountQuery {
  current_data: IUserInfo[];
  total_page: number;
  total_record: number;
}

/**
 * 汇总数据
 */
export interface ISummaryQuery {
  title:string;
  unit:string;
  today_num:string;
  yesterday_title:string;
  yesterday_num:string;
}
