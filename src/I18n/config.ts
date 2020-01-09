const enResouce = {
  dipperin: {
    userProtocol: 'User agreement',
    cancel: 'Cancel',
    confirm: 'Confirm',
    start: {
      create: 'Create wallet',
      import: 'Import wallet',
    },
    import: {
      title: '助记词导入',
      mnemonicPlh: '请按顺序输入助记词',
      passwordPlh: '请设置钱包密码',
      repeatPasswordPlh: '请重复密码',
      passwordTip: '密码提示信息(可不填)',
      agreeLabel: '我已仔细阅读并同意',
      agree: "《用户协议》",
      btnText: '导入钱包'
    },
    me: {
      personalCenter: 'Personal center',
      setting: 'Setting',
      aboutUs: 'About us',
      FAQ: 'FAQ',
      language: 'Language',
      nodeChoose: 'Node selection',
      functionIntroduction: 'Function introduction',
      helpCenter: 'Help center',
      helpCenterDetails: 'Help center details',
      fingerUnlock: 'Fingerprint unlocking',
      fingerPay: 'Fingerprint payment',
      changePassword: 'Change password',
      simplifiedChinese: '简体中文',
      English: 'English',
      remoteNode: 'Remote node',
      venus: 'venus',
      mercury: 'mercury',
      oldPassword: 'The old password',
      newPassword: 'The new password',
      confrimPassword: 'Confirm password',
      pleaseEnterOldPsd: 'Please enter the old password',
      pleaseEnterNewPsd: 'Please enter a new password',
      pleaseConfirmNewPsd: 'Please confirm the new password',
      psdLimit:
        'Password length is 8-24, is composed of Numbers, letters, symbols, letters are case sensitive',
      confrimChange: 'Confirm the change',
      forgetPassword: 'Forgot password?',
      walletProduction: 'The wallet products',
      versionUpdate: 'Version update',
    },
    transaction: {
      transaction: 'Transaction',
      toAddress: 'To',
      enterAddressOrWord: 'Please enter address/Shortword',
      sendAmount: 'Amount',
      enterAmount: 'Please enter amount',
      remark: 'Remark',
      optional: 'Optional',
      txFee: 'Fee',
      send: 'Send',
      low: 'low',
      middle: 'middium',
      high: 'high',
      receive: 'Receive',
      shortWordReceive: 'Shortword Receive',
      Shortword: 'Short Word',
      enterRegisterShortword: 'Please enter your Short Word',
      enterReceiveAmount: 'Please enter amount',
      remarkOptional: 'Remard(Optional)',
      ehterRemark: 'Please enter remark',
      sendShortword: 'Send Remark',
    },
  },
};

export type I18StartType = typeof enResouce.dipperin.start
export type I18ImportType = typeof enResouce.dipperin.import
export type I18nMeType = typeof enResouce.dipperin.me
export type I18nTransactionType = typeof enResouce.dipperin.transaction;

const zhResource: typeof enResouce = {
  dipperin: {
    userProtocol: '用户协议',
    cancel: 'Cancel',
    confirm: 'Confirm',
    start: {
      create: '创建钱包',
      import: '导入钱包',
    },
    import: {
      title: '助记词导入',
      mnemonicPlh: '请按顺序输入助记词',
      passwordPlh: '请设置钱包密码',
      repeatPasswordPlh: '请重复密码',
      passwordTip: '密码提示信息(可不填)',
      agreeLabel: '我已仔细阅读并同意',
      agree: "《用户协议》",
      btnText: '导入钱包'
    },
    me: {
      personalCenter: '个人中心',
      setting: '设置',
      aboutUs: '关于我们',
      FAQ: 'FAQ',
      language: '语言',
      nodeChoose: '节点选择',
      functionIntroduction: '功能介绍',
      helpCenter: '帮助中心',
      helpCenterDetails: '帮助中心详情',
      fingerUnlock: '指纹解锁',
      fingerPay: '指纹支付',
      changePassword: '修改密码',
      simplifiedChinese: '简体中文',
      English: 'English',
      remoteNode: '远程节点',
      venus: '金星',
      mercury: '内测网',
      oldPassword: '旧密码',
      newPassword: '新密码',
      confrimPassword: '确认密码',
      pleaseEnterOldPsd: '请输入旧密码',
      pleaseEnterNewPsd: '请输入新密码',
      pleaseConfirmNewPsd: '请确认新密码',
      psdLimit: '密码长度为8-24位，由数字、字母、符号组成，字母区分大小写',
      confrimChange: '确认修改',
      forgetPassword: '忘记密码?',
      walletProduction: '钱包产品',
      versionUpdate: '版本更新',
    },
    transaction: {
      transaction: '交易',
      toAddress: '发送地址',
      enterAddressOrWord: '请输入地址或口令',
      sendAmount: '发送金额',
      enterAmount: '输入金额',
      remark: '备注',
      optional: '选填',
      txFee: '交易费',
      send: '发送',
      low: '低',
      middle: '中',
      high: '高',
      receive: '收款',
      shortWordReceive: '口令收款',
      Shortword: '口令',
      enterRegisterShortword: '请输入注册口令',
      enterReceiveAmount: '请输入收款金额',
      remarkOptional: '备注(选填)',
      ehterRemark: '输入备注',
      sendShortword: '发送口令',
    },
  },
};

export const resource = {
  en: enResouce,
  zh: zhResource,
};
