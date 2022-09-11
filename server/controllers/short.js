import express from "express";
import mongoose from "mongoose";

import url_DB from "../models/Url.js";

const routerControl = express.Router();

const HOST = process.env.HOST || "http://localhost:4000/";

const geraString = (tamanho) => {
    let stringAleatoria = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

let endUrl = ""

async function validUrl(num) {
    endUrl = `${HOST}` + geraString(num);
    const existsUrl = await url_DB.findOne({short_url: endUrl})

    if(existsUrl) {
        await validUrl(num+1)
    }

    return endUrl;
}

export const shortUrl = async (req, res) => {
    const { url } = req.body

    endUrl = await validUrl(5);

    if(url) {
        const createUrl = new url_DB({
            url,
            short_url: endUrl,
        })
        try {
            
            await createUrl.save()
    
            res.status(200).json(endUrl);
        } catch (error) {
            console.log(error)
        }
    }

    
}

export const accessUrl = async (req, res) => {

    const shortUrl = `${HOST}` + req.params.url

    const urlOrigin = await url_DB.findOne({short_url: shortUrl})

    try {
        res.redirect(301, urlOrigin.url)
    } catch (error) {
        res.redirect(301, "/")
    }
    

    
}

export default routerControl;