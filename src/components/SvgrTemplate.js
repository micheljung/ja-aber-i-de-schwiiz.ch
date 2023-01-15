// This whole file is just a workaround for https://github.com/gregberge/svgr/issues/516
function defaultTemplate(
  {template},
  opts,
  {imports, interfaces, componentName, props, jsx, exports},
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const typeScriptTpl = template.smart({plugins})
  return typeScriptTpl.ast`${imports}
import { useState, useEffect, useRef } from 'react';

${interfaces}

function ${componentName}(props, ref) {

  const svgRef = useRef();
  
  useEffect(() => {
    const svgElement = svgRef.current;
    svgElement.innerHTML = svgElement.innerHTML.replaceAll("&amp;", "&");
  });

  return ${jsx};
}

${exports}
  `
}

module.exports = defaultTemplate
