const host = {
    'dev': 'http://localhost:3000/mock',
    'stg': 'http://localhost:5001',
    'production': 'https://dm.facemagic888.com'
}[ENV];

const concatUrl = (url) => `${host}${url}`;

/**
 *  在此处配置请求 url 就可以
 *  dev 配置开发环境 mock
 *  prd 配置生产环境 数据
 */
let urls = {
    dev: {
        getUserInfoApi: '/getUserInfo.json',
        queryHomeListApi: '/queryHomeList.json',
        queryWeeklyListApi: '/queryWeeklyList.json',
        queryWeeklyDetail: '/queryWeeklyDetail.json'
    },
    prd: {
        getUserInfoApi: '/user/userinfo',
        queryHomeListApi: '/home/homelist',
        queryWeeklyListApi: '/weekly/queryWeeklyList',
        queryWeeklyDetail: '/weekly/queryWeeklyDetail',
        saveOrUpdateWeeklyApi: '/weekly/saveOrUpdate'
    }
};

if (ENV === 'dev') {
    urls = urls.dev;
} else {
    urls = urls.prd;
}

const apis = {};
for (const key in urls) {
    apis[key] = () => {
        return concatUrl(urls[key]);
    };
}

export default apis;
