/* eslint-disable prettier/prettier */
export interface RespNicknameChannelP {
  channel: string;
  ip_address: string;
  terminal: string;
  timestamp: string;
  origin: string;
  require_password_change: boolean;
  require_id_change: boolean;
  first_entry: boolean;
  needs_control_number: boolean;
  has_automatic_payments: boolean;
  rc: string;
  show_tyc: boolean;
  show_tyc_entertainments: boolean;
  show_tycpa: true;
  duplicate_document: boolean;
  additional_data: boolean;
  limit_category: string;
  bank: {
    bank_code: string;
    requires_tcor: boolean;
    requires_tsms: boolean;
    requires_tvir: boolean;
    host_online: boolean;
    allows_tcv: boolean;
    allows_tcm: boolean;
    allows_tca: boolean;
    allows_fees: boolean;
  };
  client: {
    client_id: string;
    document_type: string;
    document_number: string;
    accounts: [];
    cards: [];
    name: string;
    marital_status: string;
    birth_date: string;
    gender: string;
    email: string;
    mobile_operator: string;
    has_tc: boolean;
    has_tcv: boolean;
    has_tcm: true;
    has_tca: true;
    phone_number: string;
    prefix_cuit: string;
    suffix_cuit: string;
    nickname: string;
    due_date_pmc: string;
    due_date_mobile: string;
    last_access_pmc: string;
    last_access_mobile: string;
    password: string;
  };
  profile: {
    profile: string;
    allows_bank_transfer: true;
    allows_payments: true;
    payments_limit: string;
    bank_transfer_limit: string;
  };
}
