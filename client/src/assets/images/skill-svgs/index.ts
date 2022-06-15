import antd from './antd.svg';
import aws from './aws.svg';
import bootstrap from './bootstrap.svg';
import css from './css.svg';
import figma from './figma.svg';
import gatsby from './gatsby.svg';
import git from './git.svg';
import github from './github.svg';
import handlebars from './handlebars.svg';
import heroku from './heroku.svg';
import html5 from './html5.svg';
import javascript from './javascript.svg';
import jest from './jest.svg';
import jwt from './jwt.svg'
import linkedin from './linkedin.svg'
import medium from './medium.svg'
import mongodb from './mongodb.svg'
import mysql2 from './mysql2.svg'
import nodejs from './nodejs.svg'
import postgres from './postgres.svg'
import python from './python.svg';
import react from './react.svg';
import resume from './resume.svg';
import sass from './sass.svg';
import sequelize from './sequelize.svg';
import sql from './sql.svg';
import typescript from './typescript.svg'

type SocialSVG = {
  [key: string]: string
}

type SkillsSVG = {
  [key: string]: string
}

type BundledSVG = {
  socials: SocialSVG
  skills: SkillsSVG
}

const svgs: BundledSVG = {
  socials: {
    github,
    linkedin,
    resume,
    medium
  },
  skills: {
    antd,
    aws,
    bootstrap,
    css,
    figma,
    gatsby,
    git,
    handlebars,
    heroku,
    html5,
    javascript,
    jest,
    jwt,
    mongodb,
    mysql2,
    nodejs,
    postgres,
    python,
    react,
    sass,
    sequelize,
    sql,
    typescript
  }
}

export default svgs