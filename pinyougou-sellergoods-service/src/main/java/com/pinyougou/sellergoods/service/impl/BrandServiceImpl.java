package com.pinyougou.sellergoods.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.pinyougou.mapper.TbBrandMapper;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.pojo.TbBrandExample;
import com.pinyougou.pojo.TbBrandExample.Criteria;
import com.pinyougou.sellergoods.service.BrandService;

import entity.PageResult;

@Service
public class BrandServiceImpl implements BrandService {

//	@Reference
	@Autowired
	private TbBrandMapper tbBrandMapper;
	
	@Override
	public List<TbBrand> findAll() {
		// TODO Auto-generated method stub
		return tbBrandMapper.selectByExample(null);
	}

	//分页
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		
		PageHelper.startPage(pageNum, pageSize);
		
		Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(null);
		
		return new PageResult(page.getTotal(), page.getResult());
	}

	//添加品牌
	@Override
	public void addBrand(TbBrand brand) {
		tbBrandMapper.insert(brand);
	}

	@Override
	public void update(TbBrand brand) {
		tbBrandMapper.updateByPrimaryKey(brand);
	}

	@Override
	public TbBrand findOne(Long id) {
		return tbBrandMapper.selectByPrimaryKey(id);
	}

	@Override
	public void delete(Long[] ids) {

		for(Long id:ids) {
			tbBrandMapper.deleteByPrimaryKey(id);
		}
	}

	@Override
	public PageResult findPage(TbBrand brand, int pageNum, int pageSize) {

		PageHelper.startPage(pageNum, pageSize);
		
		TbBrandExample example = new TbBrandExample();
		
		Criteria criteria = example.createCriteria();
		
		if(brand!=null) {
			if(brand.getName()!=null&&brand.getName().trim().length()>0) {
				criteria.andNameLike("%"+brand.getName()+"%");
			}
			if(brand.getFirstChar()!=null&&brand.getFirstChar().trim().length()>0) {
				criteria.andNameLike(brand.getFirstChar()+"%");
			}
			
		}
		
		Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(example);
		
		return new PageResult(page.getTotal(), page.getResult());
			}

}
