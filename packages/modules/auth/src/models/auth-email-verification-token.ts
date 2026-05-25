import { model } from "@medusajs/framework/utils"
import { AuthIdentity } from "./auth-identity"
import { ProviderIdentity } from "./provider-identity"

export const AuthEmailVerificationToken = model
  .define("auth_email_verification_token", {
    id: model.id({ prefix: "authevtok" }).primaryKey(),
    auth_identity: model.belongsTo(() => AuthIdentity, {
      mappedBy: "email_verification_tokens",
    }),
    provider_identity: model.belongsTo(() => ProviderIdentity, {
      mappedBy: "email_verification_tokens",
    }),
    email: model.text(),
    token_hash: model.text(),
    expires_at: model.dateTime(),
    used_at: model.dateTime().nullable(),
    metadata: model.json().nullable(),
  })
  .indexes([
    {
      name: "IDX_auth_email_verification_token_provider_identity_id",
      on: ["provider_identity_id"],
      where: "deleted_at IS NULL",
    },
    {
      name: "IDX_auth_email_verification_token_token_hash",
      on: ["token_hash"],
      where: "deleted_at IS NULL",
    },
    {
      name: "IDX_auth_email_verification_token_expires_at",
      on: ["expires_at"],
      where: "deleted_at IS NULL",
    },
  ])
