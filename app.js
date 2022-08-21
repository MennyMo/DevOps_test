import express from 'express';
import mongodb from './app/db/mongodb';
import appInit from './app/config/app';

async function init() {
   mongodb();
   appInit(express());
}

init();