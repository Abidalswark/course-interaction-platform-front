import { message } from 'ant-design-vue';
import { defineStore } from 'pinia';
import router from '@/router';
import { checkAdminRole, doLogin } from '@/api/user';

export const useUser = defineStore(
  'user',
  () => {
    const token = ref('');
    const loginType = ref('account');
    const isLogin = ref(false);
    const personalInfo = ref({
      userid: -1,
      username: null,
      password: ""
    });
      // 登录的方法
    async function login(username: string, password: string) {
      // 调用登录接口
      const { code, data } = await doLogin({ username, password });
      if (code === 0) {
        token.value = data.userid;
        // await asyncUserInfo();
      }
    }

    //  切换登录状态
    async function switchLoginState(_token: string) {
      token.value = _token;
      await asyncUserInfo();
    };
    // 同步登录信息
    async function asyncUserInfo(){
      if (token.value === '') {
        isLogin.value = false;
        return;
      }

      // 获取用户信息
      const { data: details, code: c_code } = await checkAdminRole();
      if (c_code === 0) {
        if (details.role === 'ADMIN') {
          isLogin.value = true;
          personalInfo.value = { ...details };
          router.push('/manager/main');
          message.success('登录成功');
        } else {
          clearInfo();
          message.error('您不是管理员, 无法登录!');
        }
      }
    };

    // 退出登录
    const logout = () => {
      clearInfo();
      nextTick(() => router.push('/'))
      message.success('退出登录成功！');
    };
    /**
     * 清空用户信息
     */
    const clearInfo = function () {
      token.value = '';
      isLogin.value = false;
      personalInfo.value = {} as any;
      // nextTick(() => navigateTo('/'))
    };
    return {
      switchLoginState,
      token,
      isLogin,
      personalInfo,
      asyncUserInfo,
      logout,
      clearInfo,
      loginType,
      login
    };
  },
  //持久化储存
  { persist: true }
);

