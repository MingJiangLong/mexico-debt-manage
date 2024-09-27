import { DimensionValue, StyleSheet } from "react-native"

const brandPrimary = '#108ee9'
const brandPrimaryTap = '#1284d6'
const basicColor = "#474747"
const fontSizeCaption = 16
export default {

  /** 按钮基础背景色 */
  color_button_fill_base: "",

  /** 按钮文字基础颜色 */
  color_button_text_base: "",

  size_head_title: "",

  // 支付宝钱包默认主题
  // https://github.com/ant-design/ant-design-mobile/wiki/设计变量表及命名规范

  // 色彩, NOTE: must use `#000000` instead of `#000`
  // https://facebook.github.io/react-native/docs/colors.html
  // 8-digit-hex to 4-digit hex https://css-tricks.com/8-digit-hex-codes/
  // https://www.chromestatus.com/feature/5685348285808640 chrome will support `#RGBA`
  // 文字色
  color_text_base: '#000000', // 基本
  color_text_base_inverse: '#ffffff', // 基本 _ 反色
  color_text_placeholder: '#bbbbbb', // 文本框提示
  color_text_disabled: '#bbbbbb', // 失效
  color_text_caption: '#888888', // 辅助描述
  // color_text_paragraph: '#333333', // 段落
  color_link: brandPrimary, // 链接
  color_icon_base: '#cccccc', // 许多小图标的背景，比如一些小圆点，加减号

  // 背景色
  fill_body: '#f5f5f9', // 页面背景
  fill_base: '#ffffff', // 组件默认背景
  fill_tap: '#dddddd', // 组件默认背景 _ 按下
  fill_disabled: '#dddddd', // 通用失效背景
  fill_mask: 'rgba(0, 0, 0, .4)', // 遮罩背景
  fill_grey: '#f7f7f7',

  // 全局/品牌色
  brand_primary: brandPrimary,
  brand_primary_tap: brandPrimaryTap,
  brand_success: '#6abf47',
  brand_warning: '#faad14',
  brand_error: '#f4333c', // 错误(form validate)
  brand_important: '#ff5b05', // 用于小红点

  // 边框色
  border_color_base: '#dddddd', // 基础的
  border_color_thin: '#eeeeee', // 更细的

  // 字体尺寸
  font_size_icontext: 10,
  font_size_caption_sm: 12,
  font_size_base: 14,
  font_size_subhead: 15,
  font_size_caption: 16,
  // font_size_heading: 17,

  // 圆角
  // ---
  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  // 边框尺寸
  // ---
  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  // 间距
  // ---
  // 水平间距
  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,

  // 垂直间距
  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,

  // 图标尺寸
  // ---
  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md: 22, // 导航条上的图标
  icon_size_lg: 36,

  // 组件变量

  // action-sheet
  actionsheet_item_height: 50,
  actionsheet_item_font_size: 18,

  // button
  button_height: 47,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: brandPrimaryTap,

  ghost_button_color: brandPrimary, // 同时应用于背景、文字颜色、边框色
  ghost_button_fill_tap: `${brandPrimary}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW

  warning_button_fill: '#e94f4f',
  warning_button_fill_tap: '#d24747',

  link_button_font_size: 16,

  // button2
  color_button_inverse: "#ffffff",
  height_button: 48,
  font_size_button: 18,
  border_radius_button: 24,
  border_color_button: 1,
  paddingHorizontal_button: 15,


  // modal
  modal_font_size_heading: 18,
  modal_button_font_size: 18, // 按钮字号
  modal_button_height: 50, // 按钮高度

  // list
  list_item_height_sm: 35,
  list_item_height: 44,

  // tabs
  tabs_height: 42,
  tabs_font_size_heading: 15,

  // tab_bar
  tab_bar_fill: '#ebeeef',
  tab_bar_height: 50,

  // toast
  toast_fill: 'rgba(0, 0, 0, .8)',

  // search_bar
  search_bar_fill: '#efeff4',
  search_bar_height: 44,
  search_bar_input_height: 28,
  search_bar_font_size: 15,
  search_color_icon: '#bbbbbb', // input search icon 的背景色

  // notice_bar
  notice_bar_fill: '#fffada',
  notice_bar_height: 36,

  // checkbox
  checkbox_fill_disabled: '#f5f5f5',
  checkbox_border: '#d9d9d9',
  checkbox_border_disabled: '#b9b9b9',

  // switch
  switch_unchecked: '#cccccc',
  switch_unchecked_disabled: '#cccccc66', // switch_fill的40%透明度

  // tag
  tag_height: 25,
  tag_small_height: 15,

  // picker
  picker_header_height: 44, // picker标题的高度
  picker_item_height: 34, // picker item最低高度

  // form
  prefix_width: 65, // 水平布局时，表单项的标签宽度
  prefix_padding: 6, // input item 上下内边距
  extra_max_width: '70%', // list extra宽度

  // tooltip
  tooltip_dark: 'rgba(0, 0, 0, 0.9)',
  tooltip_border_radius: 8,
  tooltip_arrow_size: 8,

  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex: 999,
  tooltip_zindex: 999,

  font_size_text_heading: 20,
  color_text_paragraph: "#707070",
  color_text_subhead: "#474747",
  color_text_heading: "#474747",
  font_size_text_subhead: 16,
  line_height_text_paragraph: 24,
  background_color_button_linear_gradient: ["#589D98", "#40847F"],
  color_button_ghost: "#438883",

  size_icon: 16,
  color_text_link: "#474747",// 链接文字颜色
  font_size_text_link: 14,

  backgroundColorPageContainer: "#FFFFFF",
  paddingHorizontalPageContainer: 5,
  paddingTopPageContainer: 2,

  paddingCard: 4,// 卡片
  borderColorCard: "grey",// 卡片背景色
  borderRadiusCard: 4, // 卡片圆角

  backgroundColor_divider: "#E2E1E2",//分割线背景色
  //------------------------------------------------------------------
  // form caption 文字设置
  fontSize_caption: fontSizeCaption,
  fontSize_form_caption: fontSizeCaption,
  color_form_caption: "#333333",
  fontWeight_form_caption: "500" as const,

  // button 文字设置
  fontSize_button: 20,
  fontWeight_button: "600" as const,
  color_button: 'white',
  color_reverse_button: "black",

  // radius文字设置
  fontSize_radius_text: 14,
  color_radius_text: "#C7C7C7",
  fontWeight_radius_text: "500" as const,

  // 单选 选中和未选中颜色设置
  color_radius_check: "#474747",
  color_radius_uncheck: "#474747",

  // 输入框文字设置
  fontSize_input_text: fontSizeCaption,
  color_input_text: '#333333',
  fontWeight_input_text: '400' as const,
  color_input_placeholder_text: "#C7C7C7", // 这个不用了 只能在props设置
  paddingHorizontal_input_text: 8,
  // 输入框容器设置
  height_input_container: 43,// 输入框容器
  height_input: 27,// 输入框



  // 表单项设置
  height_form_field: 62,
  height_form_caption: 19,
  width_form_icon: 14,// 表单图标容器宽度
  gap_form_field: 10,
  gap_form_icon_and_field: 7,// 图标和field之间的距离

  // link文字设置

  fontSize_link_text: 14,
  color_link_text: '#999999',
  fontWeight_link_text: "400" as const,
  textDecorationColor_link_text: "#999999",
  textDecorationLine_link_text: "underline" as const,

  // notice设置
  backgroundColor_notice_container: "#2F2F2F",
  paddingVertical_notice_container: 11,
  paddingHorizontal_notice_container: 20,
  width_notice_container: "90%" as DimensionValue,
  borderRadius_notice_container: 10,

  color_notice_text: "white",
  fontSize_notice_text: 14,
  fontWeight_notice_text: "400" as const,

  // card 设置
  paddingHorizontal_card: 16,
  paddingVertical_card: 10,
  borderRadius_card: 20,
  borderWidth_card: StyleSheet.hairlineWidth,
  borderColor_card: "#E2E1E2"
}