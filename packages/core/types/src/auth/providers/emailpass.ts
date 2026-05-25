export interface EmailPassAuthProviderOptions {
  hashConfig?: {
    logN: number
    r: number
    p: number
  }
  require_email_verification?: boolean
  verification_token_ttl_seconds?: number
}
