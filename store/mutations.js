
export default {
  // 更新用户信息
  update_user_info (state, data) {
    console.log('data===', data, state)
    state.userInfo.userInfo = { ...state.userInfo.userInfo, ...data }
  },
  increment (state) {
    state.counter++
  }
}
