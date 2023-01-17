
const indicadores = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const indicadoresDetalleCampanasDesp = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const indicadoresDetalleProgramadas = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const indicadoresDetallesNotificacionesEnviadas = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const indicadoreFechaProgramacion = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const barsData = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const donutDataEnviadasCanal = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

const donutDataEficiencias = (options) => {
  let search = '?opcion=todos'
  if (options.opt !== 'init') {
    if (options.typeSearch === 'C') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.canal !== 'todos')) {
        search = '?opcion=canal&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal !== 'todos') {
        search = '?opcion=canal,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&canal=' + options.canal
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.canal === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.canal === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'CPG') {
      if ((options.fechaInit === '' || options.fechaFint === '') && (options.camp !== 'todos')) {
        search = '?opcion=campana&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp !== 'todos') {
        search = '?opcion=campana,fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint + '&listCampana=' + options.camp
      } else if (options.fechaInit !== '' && options.fechaFint !== '' && options.camp === 'todos') {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      } else if ((options.fechaInit === '' || options.fechaFint === '') && options.camp === 'todos') {
        search = '?opcion=todos'
      }
    }
    if (options.typeSearch === 'T') {
      if ((options.fechaInit !== '' || options.fechaFint !== '') && (options.camp === '') && (options.canal === 'todos')) {
        search = '?opcion=fecha&fechaInicio=' + options.fechaInit + '&fechaFin=' + options.fechaFint
      }
    }
  }
  return search
}

export default {
  indicadores,
  barsData,
  donutDataEnviadasCanal,
  donutDataEficiencias,
  indicadoresDetalleCampanasDesp,
  indicadoresDetalleProgramadas,
  indicadoresDetallesNotificacionesEnviadas,
  indicadoreFechaProgramacion
}
