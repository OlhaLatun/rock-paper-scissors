import crypto from 'crypto'
import secureRandom from 'secure-random'

export default class HMACgenerator {
  constructor (bytes) {
    this.bytes = bytes
    this.key = ''
  }

  generateKey () {
    const buffer = secureRandom.randomBuffer(this.bytes)
    return crypto.createHmac('sha3-256', buffer).digest('hex')
  }

  generateHMAC (move, key) {
    return crypto.createHmac('sha3-256', key)
      .update(move)
      .digest('hex')
  }
}
