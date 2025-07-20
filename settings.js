require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAC2s9FphQUUCUAQAAGsHAAAKAAAAY3JlZHMuanNvbpVUTZOiSBD9L3XVGAFBhIiOGEBFWlE+1FY35lBCgSVQYFGgOOF*30C7p+ewO9vLqciqyHz53sv8CUiOSzRDDVB*goLiGjLUHllTIKACvYoiREEXhJBBoIJKGxFRcM7adImP+yjqXTa3q64Yi8raagZ2x0UKT8NAIcnuBdy7oKgOKQ7+kNBL3eMUsfPbpR+Is1m8T255*bqx+D3V9JlE0vWC3fhQEgXrBdzbjBBTTOJxcUQZojCdocaBmH4NfjYSL7Lfs5g94r1AIHSUr3hjmBS0swneBMRpgbhWxo6QcV+DPyE4XjJ*N95szx62V*aC25WLebF10sZxTkVn3IznAgw3hvaEX+KYoNAKEWGYNV*mfbBkayHuGa6daOkqDzVTOm03Bgu0BTHj*VU+j8vRoRwqG*FrwOtLZobrjjtwS8lajI7U9Ff6LN0UHhGFNHbr47CfGuFsoq9*B+7QD68k*4f34bLhisGeT0yq5VOYNRW9xj0iVQfHyUXd1pebAz*x5sbY*hp8RNF8MZkfZXnE52STk36nSiSnIkkUFscLnMQHzl*yfomTT*iQVfRPKN90*sybljSop9ar60sJskXeHJ939W2yHygbPqurTs6Redw4XjbYHNhVp0ElDBq*8W43t6e4fdMcjfR6sJ+se9vziXNHl5dHRwlqrBCo*L0LKIpxyShkOCePWL8LYFj7KKCIPdgFAo6GY963XGORbZWlu*SuHp*7EvKCslNdDTHt09PWfq117gV0QUHzAJUlCqe4ZDltbFSWMEYlUP*60QUEXdlTt7Zan++CCNOSrUlVpDkMP0T9uIRBkFeE+Q0JjPaAKFC5zzBiDJO4bGmsCKTBEdfIOEJWAjWCaYl+NYgoCoHKaIV+Da2Rhy3vw9nO0VaSAboge+iBw7ZnQRpI8lCRxYEqfC+*XdqksCi+EcRAF6TPR7I05BVeUnhOkkRBFb638fsveG22EDGI0xKowFj2DkMpN8azqa4EtmlqVqwZsQY+2*mwxZP3tLjw*Kp*K9928iE7Wtvl26q06lEyGZzcS+Tu4NXvKOhw8eyXf0gCVEBsk0yPr0qmrUZyKA+xG3Vm4lwc4YseBRxXG3gn12K1L51zYCdj87beRvJ5F6Wzg+MF62yxvp1I1rO1udjJBKTpl3Z3tNVCVOMA*V5s0TkcmXjFcXP0oyvRmbiNQxbApDjg5O3N2x2kK840pGk9IwgyL0qSgePUnT4SptpwoPHktO7ffKTkE6HRtVMHd5jmPg37GJj0fVHhh5daodrfCKPH3BPYyvdfwj1ht+7i7t3fMrzvkX+ZRX0Pg0W4VobyJFsKUu5PbmkiG*OLpKOcs6ecaZbrut5mw*EK3O8*uqBIIYtymgEVQBLSHIegC2hetXa1SJT*oZihWZb+3ncKS6Z9jsAKZ6hkMCuAystSnxNlgROfrxyaF1NYHlvVs75+aO3caEXhM8g+Bgpo7WenMbj*DVBLAQIUAxQAAAgIAC2s9FphQUUCUAQAAGsHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2250565789746',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'prince',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || 'false',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || 'true',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || 'false'
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
