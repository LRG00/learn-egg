'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const user = await this.app.mysql.get('zj_users', { user_id: 1 });
    const { ctx } = this;
    const user = await ctx.service.user.find(2);
    // const results = await this.app.mysql.select('zj_users')
    // const result = await this.app.mysql.insert('zj_users', { user_name: 'Hello World' })
    console.log(user, 'kkkkkkkkkkkkkk');
    
    ctx.body = user;
  }
}

module.exports = HomeController;
