

import { fakeDb } from "../db/FakeDb.js"
import { BurgerSchema } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  async editBurger(body) {
    const burger = await this.getBurgerById(body.id)
    let burgIndex = fakeDb.burgers.indexOf(burger)
    const newBurg = new BurgerSchema(body)
  }
  async createBurger(body) {
    body.id = Math.floor(Math.random() * 10000)
    fakeDb.burgers.push(body)
    return body
  }
  async removeBurger(burgerId) {
    const burger = await this.getBurgerById(burgerId)
    fakeDb.burgers.splice(fakeDb.burgers.indexOf(burger), 1)
  }
  async getBurgerById(burgerId) {
    const burger = fakeDb.burgers.find(b => b.id == burgerId)
    if (!burger) { throw new BadRequest('Invalid Id') }
    return burger
  }
  async getBurgers() {
    const res = fakeDb
    return res.burgers
  }

}

export const burgersService = new BurgersService()