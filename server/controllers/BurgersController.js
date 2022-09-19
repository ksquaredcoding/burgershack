import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/:burgerId', this.getBurgerById)
      .delete('/:burgerId', this.removeBurger)
      .post('', this.createBurger)
      .put(':burgerId', this.editBurger)
  }

  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgersService.getBurgerById(burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async removeBurger(req, res, next) {
    try {
      await burgersService.removeBurger(req.params.burgerId)
      res.send('Burger Removed')
    } catch (error) {
      next(error)
    }
  }
  async createBurger(req, res, next) {
    try {
      const burger = await burgersService.createBurger(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async editBurger(req, res, next) {
    try {
      const burger = await burgersService.editBurger(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}