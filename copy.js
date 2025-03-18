/*
 * @Author: yechunxi
 * @Date: 2023-05-30 19:04:06
 * @LastEditTime: 2023-11-29 11:05:24
 * @LastEditors: yechunxi
 * @FilePath: /rn-weiliaoke/weiliaoke/utils/jump.ts
 */
/**
 * 入口点击事件统一拦截处理逻辑
 */
import { DeviceEventEmitter } from 'react-native';
import {
    InterceptorManager,
    checkAuthStatusHandler,
    checkFlyConsultantHander,
    checkLoupanStatusHandler,
    checkVersionUpdateHander,
    checkLPJDability,
    checkIsMemberCity
} from './Interceptor';
import WConfirmVersionUpdate from '@components/WConfirmVersionUpdate';
import { checkConsultInfo, setStorageByKey, KEYS } from '@utils/AsyncStorages';
import { sendSoj } from './Statistics';
import { ENTRY_KEYS } from '@constants/mapping';
import Navigator from '@Navigator';
import { MapObject } from 'types';
import openLpjdActionSheet from '../page/loupanInterpret/LpjdActionSheet';
import { clearNumRedDot } from '@actions/redDotManager';
import { markAsRead } from '@actions/system';
// @ts-ignore
import WIMSDK from '@native/WIMSDK';
import { getAESDecryptString } from './AES';

/**
 * 去签到拦截逻辑统一处理
 *
 */
export const gotoCheckIn = (props: any = {}) => {
    const { params = {}, sojParams = {}, navigator } = props;
    const isExperimentCity =
        window.store.getState().user?.isExperimentCity ?? false;
    const is_air_force =
        window.store.getState().user?.consultinfo?.is_air_force ?? false;
    const isPk = isExperimentCity && !is_air_force;
    const {
        pkTitle = 'PK展位',
        qdTitle = '每日签到',
        moduleTitle = '', // 未认证提示的模块title
        pkPageProps = {},
        checkInProps = {},
    } = params;
    const { qdsoj = '', pkSoj = '' } = sojParams;
    const title = moduleTitle ? moduleTitle : isPk ? pkTitle : qdTitle;
    const Manager = new InterceptorManager();

    if (isExperimentCity) {
        Manager.addHandler(checkFlyConsultantHander);
    }
    const finalHandler = () => {
        if (isPk) {
            // 去PK
            const jumpParams = {
                screen: 'PKPosition',
                passProps: pkPageProps,
            };
            navigator
                ? navigator.push(jumpParams)
                : Navigator.push(
                      window.store.getState().basic.jumpTab,
                      jumpParams,
                  );
            pkSoj && sendSoj(pkSoj);
        } else {
            // 去签到
            DeviceEventEmitter.emit('CheckInModal', {
                navigator: navigator,
                ...checkInProps,
            });
            qdsoj && sendSoj(qdsoj);
        }
    };
    Manager.addHandler(checkLoupanStatusHandler);
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, title, props?.navigator),
    );
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.PKZW));
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去问答广场
export const goWendaGC = (props: MapObject) => {
    const { navigator } = props;
    const Manager = new InterceptorManager();
    const finalHandler = () => {
        navigator
            ? navigator.push({
                  screen: 'QuestionAnswer',
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'QuestionAnswer',
              });
    };
    Manager.addHandler(checkLoupanStatusHandler);
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '问答广场', props?.navigator),
    );
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.WDGC));
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去楼盘点评
export const goLoupanDP = (props: MapObject) => {
    const { navigator } = props;
    const Manager = new InterceptorManager();
    const finalHandler = () => {
        navigator
            ? navigator.push({
                  screen: 'CommentsList',
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'CommentsList',
              });
    };

    Manager.addHandler(checkLoupanStatusHandler);
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '楼盘点评', props?.navigator),
    );
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.LPDP));
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去楼盘解读
export const goTWJD = (props: MapObject) => {
    const Manager = new InterceptorManager();
    const { navigator } = props;
    const finalHandler = () => {
        checkConsultInfo();
        navigator
            ? navigator.push({
                  screen: 'LoupanInterpret',
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'LoupanInterpret',
              });
    };
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '楼盘解读', props?.navigator),
    );
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.LPJD));
    // 6.16.0 免费盘的试点城市也可以进去
    Manager.addHandler(checkLPJDability);
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去楼盘解读
export const goSPJD = (props: MapObject) => {
    const Manager = new InterceptorManager();
    console.log('1chufa?')
    const { navigator } = props;
    const finalHandler = () => {
        checkConsultInfo();
        navigator
            ? navigator.push({
                  screen: 'VideoInterpret',
                  passProps: {
                    fromScreen: props.fromScreen
                  }
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'VideoInterpret',
                  passProps: {
                    fromScreen: props.fromScreen
                  }
              });
    };
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '楼盘解读', props?.navigator),
    );
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.LPJD));
    // 6.16.0 免费盘的试点城市也可以进去
    Manager.addHandler(checkLPJDability);
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去楼盘解读
export const goLoupanJD = (props: MapObject) => {
    const Manager = new InterceptorManager();
    const finalHandler = () => {
        checkConsultInfo();
        openLpjdActionSheet();
    };
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '楼盘解读', props?.navigator),
    );
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.LPJD));
    // 6.16.0 免费盘的试点城市也可以进去
    Manager.addHandler(checkLPJDability);
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去pk展位
export const goPKZW = (props: MapObject) => {
    const { navigator } = props;
    const Manager = new InterceptorManager();
    const finalHandler = () => {
        navigator
            ? navigator.push({
                  screen: 'PKPosition',
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'PKPosition',
              });
    };
    Manager.addHandler(checkFlyConsultantHander);
    Manager.addHandler(checkIsMemberCity);
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, 'PK展位', props?.navigator),
    );
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.PKZW));
    Manager.addHandler(finalHandler);
    Manager.handle();
};

// 去抢客宝
export const goQkbList = (props: MapObject) => {
    const Manager = new InterceptorManager();

    const finalHandler = () => {
        setStorageByKey(KEYS.SHOW_AIPK_NEW_TAG);
        // 微聊消息需要同步给SDK已读， userId与source固定的
        WIMSDK.ackConversationsHasRead('133', 4);
        window.store.dispatch(markAsRead({ type: 'ai_dispatcher' }));
        window.store.dispatch(clearNumRedDot('qkbRedDot'));
        props?.navigator
            ? props.navigator.push({
                  screen: 'QkbList',
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'QkbList',
              });
    };

    Manager.addHandler(checkLoupanStatusHandler);
    Manager.addHandler(checkIsMemberCity);
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '抢客宝', props?.navigator ?? null),
    );
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.QKB));
    Manager.addHandler(finalHandler);
    Manager.handle();
};


// 去任务中心
export const goTaskCenter = (props: MapObject) => {
    const Manager = new InterceptorManager();
    Manager.addHandler(checkLoupanStatusHandler);
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '每周任务', props.navigator),
    );
    const finalHandler = () => {
        WConfirmVersionUpdate('task_centre', () => {
            props.navigator.push({ screen: 'QuestCenter' });
        });
    };

    Manager.addHandler(finalHandler);
    Manager.handle();
}

// 去分享获客
export const goFxhk = (props: MapObject) => {
    const { navigator } = props;
    const Manager = new InterceptorManager();
    const finalHandler = () => {
        navigator
            ? navigator.push({
                  screen: 'DevelopmentHomePage',
              })
            : Navigator.push(window.store.getState().basic.jumpTab, {
                  screen: 'DevelopmentHomePage',
              });
    };
    Manager.addHandler(checkLoupanStatusHandler);
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(
        checkAuthStatusHandler.bind(null, '分享获客', props?.navigator),
    );
    // eslint-disable-next-line prettier/prettier
    Manager.addHandler(checkVersionUpdateHander.bind(null, ENTRY_KEYS.FXHK));
    Manager.addHandler(finalHandler);
    Manager.handle();
}



isExperimental[TEST_CITYTYPE.VIP]