import { BaseFilterable } from "../../dal"

export type AuthEmailVerification = {
  actor_type?: string | null
  provider: string
  email: string
  expires_at?: Date | string
}

export type AuthEmailVerificationTokenDTO = {
  id: string
  auth_identity_id?: string
  provider_identity_id?: string
  email: string
  expires_at: Date
  used_at?: Date | null
  metadata?: Record<string, unknown> | null
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date | null
}

export type CreateAuthEmailVerificationTokenDTO = {
  auth_identity_id: string
  provider_identity_id: string
  email: string
  expires_at: Date
  metadata?: Record<string, unknown> | null
}

export type CreateAuthEmailVerificationTokenResponse = {
  token: string
  email_verification_token: AuthEmailVerificationTokenDTO
}

export type RequestAuthEmailVerificationDTO = {
  actor_type?: string | null
  provider: string
  email: string
  ttl_seconds?: number
  metadata?: Record<string, unknown> | null
}

export type RequestAuthEmailVerificationResponse = {
  token: string
  email_verification: AuthEmailVerification & {
    auth_identity_id: string
    provider_identity_id: string
    metadata?: Record<string, unknown> | null
  }
}

export type ConfirmAuthEmailVerificationDTO = {
  token: string
}

export type ConfirmAuthEmailVerificationResponse = {
  email_verified: true
  auth_identity_id: string
  provider_identity_id: string
  email: string
}

export interface FilterableAuthEmailVerificationTokenProps
  extends BaseFilterable<FilterableAuthEmailVerificationTokenProps> {
  id?: string[]
  auth_identity_id?: string
  provider_identity_id?: string
  email?: string
  token_hash?: string
}
