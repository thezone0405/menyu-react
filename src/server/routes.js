import express from 'express'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { renderToString } from "react-dom/server"

const router = express.Router()

router.get('*', (req,res) => {})