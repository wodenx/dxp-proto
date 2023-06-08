/*
 * Copyright 2019-2023 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package dxp;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.Validate;
import org.jbehave.core.model.ExamplesTable.TableProperties;
import org.jbehave.core.model.ExamplesTable.TableRows;
import org.jbehave.core.model.TableParsers;
import org.jbehave.core.model.TableTransformers.TableTransformer;
import org.vividus.util.ExamplesTableProcessor;

public class UrlNormalizationTransformer implements TableTransformer
{
    @Override
    public String transform(String tableAsString, TableParsers tableParsers, TableProperties properties)
    {
        TableRows rows = tableParsers.parseRows(tableAsString, properties);
        List<String> columns = rows.getHeaders();
        Validate.isTrue(columns.size() == 1, "Expected table with only one column");

        return rows.getRows().stream()
                             .flatMap(List::stream)
                             .map(url -> StringUtils.appendIfMissing(url, "/"))
                             .map(List::of)
                             .collect(Collectors.collectingAndThen(Collectors.toList(),
                                 urls -> ExamplesTableProcessor.buildExamplesTable(columns, urls, properties)));
    }
}
