import request, { BASE_URL } from '@/utils/request';

// 登录接口
export function doLogin(data: {
  userid?: number;
  username?: string;
  password?: string;
}) {
  return request('/user/login', {
    method: 'POST',
    data
  });
}


// 用户数据接口
export function checkAdminRole() {
  return request('/detail', {
    baseURL: BASE_URL + '/api/user/v1',
  });
}

//==========  后台管理
/**
 * 用户列表
 */
export function queryAccountList(data: { 
  page: number;
  size: number;
  id?: string;
  keywords?: string;
}) {
  return request('/list', {
    method: 'POST',
    data,
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}

/**
 * 修改用户
 */
export function updateAccount(data: { 
  id: number;
  role: string;
  vip_expired: string;
  medal: string;
  tag: string;
}) {
  return request('/update', {
    method: 'PUT',
    data,
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}


/**
 * 修改用户状态
 */
export function updateState(data: { 
  id: string;
  state: string;
}) {
  return request('/updateState', {
    method: 'PUT',
    data,
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}

/**
 * 获取用户详情 根据id
 */
export function detailById(data:{id:string}) {
  return request('/detail', {
    method: 'POST',
    params:{id:data.id},
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}

/**
 * 签到记录
 */
export function querySignInList(data: { 
  page: number;
  size: number;
  id?: string;
}) {
  return request('/signin/list', {
    method: 'POST',
    data,
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}

/**
 * 感兴趣
 */
export function queryFavList(data: { 
  page: number;
  size: number;
  account_id?: string;
}) {
  return request('/favorite/list', {
    method: 'POST',
    data,
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}

/**
 * 播放记录
 */
export function queryPlayRecordist(data: { 
  page: number;
  size: number;
  id: string;
}) {
  return request('/play_record', {
    method: 'POST',
    data,
    baseURL: BASE_URL + '/api/admin/account/v1',
  });
}

