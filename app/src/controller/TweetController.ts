import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Tweet } from '../entity/Tweet'

export class TweetController {
  private repository = getRepository(Tweet)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.repository.find()
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.repository.findOne(request.params.id)
  }

  async save(request: Request, response: Response, next: NextFunction) {
    // TODO: 受け取ったトークンからユーザIDを逆引きしてbodyをごにょごにょしてsaveする
    return this.repository.save(request.body)
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let targetToRemove = await this.repository.findOne(request.params.id)
    // TODO: パラメータが不正な場合はBad Requestの例外投げる
    if (targetToRemove === undefined) return
    return this.repository.remove(targetToRemove)
  }
}