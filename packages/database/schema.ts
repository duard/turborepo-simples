import type { AdapterAccount } from "@auth/core/adapters";
import {
  int,
  mysqlTable,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

// Organizations Table
export const organizations = mysqlTable("organization", {
  id: int("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other organization-related fields as needed
});

// Users Table
export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date", fsp: 3 }).defaultNow(),
  image: varchar("image", { length: 255 }),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other user-related fields as needed
});

// Groups Table
export const groups = mysqlTable("group", {
  id: int("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other group-related fields as needed
});

// Roles Table
export const roles = mysqlTable("role", {
  id: int("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other role-related fields as needed
});

// User Roles Table
export const userRoles = mysqlTable("userRole", {
  userId: varchar("userId", { length: 255 }).notNull(),
  roleId: int("roleId").notNull(),
  // Add other fields related to user roles as needed
});

// Group Roles Table
export const groupRoles = mysqlTable("groupRole", {
  groupId: int("groupId").notNull(),
  roleId: int("roleId").notNull(),
  // Add other fields related to group roles as needed
});

// Organization Users Table
export const organizationUsers = mysqlTable("organizationUser", {
  organizationId: int("organizationId").notNull(),
  userId: varchar("userId", { length: 255 }).notNull(),
  // Add other fields related to organization users as needed
});

// Organization Groups Table
export const organizationGroups = mysqlTable("organizationGroup", {
  organizationId: int("organizationId").notNull(),
  groupId: int("groupId").notNull(),
  // Add other fields related to organization groups as needed
});

// Todos Table
export const todos = mysqlTable("todo", {
  id: int("id").notNull().autoincrement().primaryKey(),
  description: varchar("description", { length: 256 }),
  completed: int("completed").notNull().default(0),
  addedAt: timestamp("added_at", { mode: "date", fsp: 3 }).defaultNow(),
});

// Accounts Table
export const accounts = mysqlTable("account", {
  userId: varchar("userId", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).$type<AdapterAccount["type"]>().notNull(),
  provider: varchar("provider", { length: 255 }).notNull(),
  providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
  refresh_token: varchar("refresh_token", { length: 255 }),
  access_token: varchar("access_token", { length: 255 }),
  expires_at: int("expires_at"),
  token_type: varchar("token_type", { length: 255 }),
  scope: varchar("scope", { length: 255 }),
  id_token: varchar("id_token", { length: 2048 }),
  session_state: varchar("session_state", { length: 255 }),
}, (account) => ({
  compoundKey: primaryKey({
    columns: [account.provider, account.providerAccountId],
  }),
})
);


// E001 Table
export const e001 = mysqlTable('e001', {
  ide001: int('ide001').notNull().autoincrement().primaryKey(),
  nome: varchar('nome', { length: 255 }),
  created: timestamp('created').defaultNow(),
  updated: timestamp('updated').defaultNow().onUpdateNow(),
  deleted: varchar('deleted', { length: 1 }), 
  sts: varchar('sts', { length: 1 }), 
});

// G004 Table
export const g004 = mysqlTable('g004', {
  idg004: int('idg004').notNull().autoincrement().primaryKey(),
  nome: varchar('nome', { length: 255 }),
  created: timestamp('created').defaultNow(),
  updated: timestamp('updated').defaultNow().onUpdateNow(),
  deleted: varchar('deleted', { length: 1 }),
  sts: varchar('sts', { length: 1 }),
  cnpj: varchar('cnpj', { length: 255 }),
  fundacao: timestamp('fundacao'),
  ide005: int('ide005'),
  observac: varchar('observac', { length: 255 }),
  emailins: varchar('emailins', { length: 255 }),
  site: varchar('site', { length: 255 }),
  facebook: varchar('facebook', { length: 255 }),
  twitter: varchar('twitter', { length: 255 }),
  youtube: varchar('youtube', { length: 255 }),
  instag: varchar('instag', { length: 255 }),
  tel1: varchar('tel1', { length: 255 }),
  tel2: varchar('tel2', { length: 255 }),
  tel3: varchar('tel3', { length: 255 }),
  tel4: varchar('tel4', { length: 255 }),
  descontoDt: timestamp('desconto_dt'),
  descontoPercentual: varchar('desconto_percentual', { length: 255 }),
  cep: varchar('cep', { length: 255 }),
  logradou: varchar('logradou', { length: 255 }),
  numero: int('numero'),
  complem: varchar('complem', { length: 255 }),
  bairro: varchar('bairro', { length: 255 }),
  cidade: varchar('cidade', { length: 255 }),
  estado: varchar('estado', { length: 255 }),
  historia: varchar('historia', { length: 255 }),
  idg002: int('idg002'),
  emailpas: varchar('emailpas', { length: 255 }),
  emailsec: varchar('emailsec', { length: 255 }),
  idg004fk: int('idg004fk'),
  sede: int('sede'),
  idg019: int('idg019'),
  idg021: int('idg021'),
  razaosocial: varchar('razaosocial', { length: 255 }),
  rubricapec: int('rubricapec'),
  rubricacotareg: int('rubricacotareg'),
});