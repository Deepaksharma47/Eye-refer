import {  DataTypes, Model } from "sequelize";
import sequelize from "../config/dbconnect";
import db from "./index";
import Address from "./Address";
import Patient from "./Patient";

class Doctor extends Model{
  public id!: number;
  public fname!: string;
  public lname!: string;
  public doctorType!: "OD" | "MD";
  public email!: string;
  public active!: boolean;
  public password!: string;
  public gender?: "Male" | "Female" | "Other";
  public phoneNo?: string;
  public profileImage?: string;
}

  Doctor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctorType: {
        type: DataTypes.ENUM("OD", "MD"),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female", "Other"),
        allowNull: true,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "doctors",
      modelName: "Doctor",
    }
  );

  Doctor.hasOne(Address, { foreignKey: "doctorId",onDelete:"CASCADE", onUpdate:"CASCADE"});
  Doctor.hasMany(Patient, { foreignKey: "doctorId" ,onDelete:"CASCADE", onUpdate:"CASCADE"});

  export default Doctor;
